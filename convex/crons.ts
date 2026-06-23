import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Clean old page views (90+ days) — weekly on Sunday at 4:00 AM UTC
// NOTE: Session cleanup is NOT needed here — Better Auth manages
// its own session lifecycle in the component namespace.
crons.weekly(
  "clean old page views",
  { dayOfWeek: "sunday", hourUTC: 4, minuteUTC: 0 },
  internal.maintenance.cleanOldPageViews,
);

export default crons;
