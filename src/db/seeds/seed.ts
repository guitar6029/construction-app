import { db } from "@/db"; // must export `db` from src/db/index.ts
import { seedProjects } from "./projects.seed";
import { seedInspections } from "./inspections.seed";

async function seed() {
  // FK safe order: child -> parent
  await db.deleteFrom("inspections").execute();
  await db.deleteFrom("projects").execute();

  const projects = await seedProjects(db);
  const projectIds = projects.map((p) => p.id);

  await seedInspections(db, projectIds);

  console.log("✅ Seed complete");
  console.log(
    "Projects:",
    projects.map((p) => `${p.name} (${p.id})`),
  );
}

seed()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await db.destroy();
  });
