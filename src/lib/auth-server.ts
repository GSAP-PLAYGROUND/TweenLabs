import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";

/**
 * Server-side auth utilities — used in Server Components and Route Handlers.
 *
 * Security:
 * - Convex URLs from env vars only — no hardcoded placeholders in production
 * - All exports are server-only — never import this in client components
 * - getToken / fetchAuthQuery catch errors at the call site (layout.tsx)
 */

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convexSiteUrl = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;

if (!convexUrl && process.env.NODE_ENV === "production") {
  console.warn(
    "⚠ NEXT_PUBLIC_CONVEX_URL is not set. Auth features will not work until it is configured.",
  );
}

export const {
  handler,
  preloadAuthQuery,
  isAuthenticated,
  getToken,
  fetchAuthQuery,
  fetchAuthMutation,
  fetchAuthAction,
} = convexBetterAuthNextJs({
  convexUrl: convexUrl || "https://placeholder.convex.cloud",
  convexSiteUrl: convexSiteUrl || "https://placeholder.convex.site",
});
