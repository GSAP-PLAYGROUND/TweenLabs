import { defineSchema } from "convex/server";
import { tables as betterAuthTables } from "./betterAuth/schema";
import { tables as appTables } from "./appSchema";

/**
 * Root schema — merges Better Auth tables + app tables.
 *
 * ⚠️  The Better Auth tables (user, session, account, verification, jwks)
 *     appear in the "app" namespace in the Convex Dashboard but are EMPTY.
 *     This is normal — they're required by @convex-dev/better-auth for
 *     TypeScript types and schema compilation. The actual auth data lives
 *     in the "betterAuth" component namespace (switch the dropdown in Dashboard).
 *
 * YOUR DATA:
 *   Dashboard "app"        → pageViews, userFavorites (your app data)
 *   Dashboard "betterAuth" → user, session, account (actual auth data)
 */
export default defineSchema({
  ...betterAuthTables, // Required by @convex-dev/better-auth — DO NOT REMOVE
  ...appTables,        // Your app tables — pageViews, userFavorites
});
