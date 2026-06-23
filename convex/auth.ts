import { query } from "./_generated/server";

/**
 * Auth queries — user identity from Better Auth component.
 *
 * IMPORTANT: User data lives in the "betterAuth" component namespace,
 * NOT in the root "app" tables. Never query ctx.db.query("user") —
 * that table is empty. Always use ctx.auth.getUserIdentity() which
 * reads directly from the Better Auth component.
 */

// ── Get current authenticated user ──────────────────────────────
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    // All user data comes from Better Auth's component tables
    // via ctx.auth.getUserIdentity() — no root table query needed
    return {
      _id: identity.subject,
      name: identity.name ?? "User",
      email: identity.email ?? "",
      image: identity.pictureUrl ?? null,
      pictureUrl: identity.pictureUrl ?? null,
    };
  },
});
