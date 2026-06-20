import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import { animations } from "@/data/animations";
import { isAuthenticated } from "@/lib/auth-server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  // Simple protection against direct browser/crawler access.
  // CLI always sends User-Agent: "tweenlabs-cli".
  // If not CLI, require standard user session.
  const userAgent = request.headers.get("user-agent") || "";
  const isCli = userAgent.includes("tweenlabs-cli");
  const authenticated = await isAuthenticated();

  if (!authenticated && !isCli) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in to view this component's registry code." },
      { status: 401 },
    );
  }

  // Handle list of components request
  if (slug === "list" || slug === "index") {
    const list = animations.map((anim) => {
      const folderName = anim.route.replace("/animations/", "");
      return {
        name: anim.name,
        componentName: anim.componentName,
        slug: folderName,
        cleanSlug: folderName.replace(/^\d+[a-z]?[-_]/, ""),
        description: anim.description,
      };
    });
    return NextResponse.json({ components: list });
  }

  // Handle bulk components request
  if (slug === "all" || slug === "all-components") {
    const files = [];
    const animationsDir = path.join(process.cwd(), "src", "app", "animations");
    for (const anim of animations) {
      const folderName = anim.route.replace("/animations/", "");
      const pagePath = path.join(animationsDir, folderName, "page.tsx");
      try {
        const pageCode = fs.readFileSync(pagePath, "utf-8");
        files.push({
          name: `${anim.componentName}.tsx`,
          content: pageCode,
        });
      } catch (err) {
        console.error(`Skipping ${folderName} due to error:`, err);
      }
    }

    return NextResponse.json({
      name: "all",
      className: "AllComponents",
      dependencies: ["gsap", "@gsap/react"],
      files,
    });
  }

  // Find the animation (supporting both exact folder slug "01-showup-cards" and clean slug "showup-cards")
  const anim = animations.find((a) => {
    const routeName = a.route.replace("/animations/", "");
    const cleanRouteName = routeName.replace(/^\d+[a-z]?[-_]/, "");
    return routeName === slug || cleanRouteName === slug;
  });

  if (!anim) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }

  const folderName = anim.route.replace("/animations/", "");
  const animationsDir = path.join(process.cwd(), "src", "app", "animations");
  const pagePath = path.join(animationsDir, folderName, "page.tsx");

  let pageCode = "";
  try {
    pageCode = fs.readFileSync(pagePath, "utf-8");
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Component page code not found" },
      { status: 500 },
    );
  }

  const dependencies = ["gsap", "@gsap/react"];

  return NextResponse.json({
    name: folderName,
    className: anim.componentName,
    dependencies,
    files: [
      {
        name: `${anim.componentName}.tsx`,
        content: pageCode,
      },
    ],
  });
}
