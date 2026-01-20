import {
  CreateProjectInput,
  Project,
  UpdateProjectIinput,
} from "@/schemas/Project";
import { Status } from "@/enums/status";
export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: "8f9e4d1a-7c2b-4f0a-9a5e-3c1b9e0f4a11",
      name: "Downtown Office Tower",
      code: "PRJ-1001",
      description:
        "Construction of a 25-story commercial office tower in the downtown core.",
      status: Status.ACTIVE,
      startDate: "2025-03-01",
      endDate: undefined,
      estimatedCompletionDate: "2026-11-30",
      projectManagerId: "b6c9d3a2-91fa-4e0c-b3b1-1b7a9c8d0e44",
      clientName: "Metro Development Group",
      city: "Chicago",
      state: "IL",
      country: "US",
      createdAt: "2025-02-15T14:22:00.000Z",
      updatedAt: "2026-01-10T09:45:00.000Z",
    },
    {
      id: "2d4a1c9f-5a7e-4b8c-8c7d-9e1f3a6b2d99",
      name: "Riverside Residential Complex",
      code: "PRJ-1002",
      description:
        "Mixed-use residential development with retail space on the ground floor.",
      status: Status.PLANNING,
      startDate: "2026-06-01",
      endDate: undefined,
      estimatedCompletionDate: "2028-02-15",
      projectManagerId: "3a9f2b6e-4c1d-4c89-9d2a-6f3e1b7c8a55",
      clientName: "Riverside Properties LLC",
      city: "Austin",
      state: "TX",
      country: "US",
      createdAt: "2026-01-05T11:10:00.000Z",
      updatedAt: "2026-01-12T16:30:00.000Z",
    },
  ];
}

export async function getProject(projectId: string): Promise<Project> {
  return {
    id: "8f9e4d1a-7c2b-4f0a-9a5e-3c1b9e0f4a11",
    name: "Downtown Office Tower",
    code: "PRJ-1001",
    description:
      "Construction of a 25-story commercial office tower in the downtown core.",
    status: Status.ACTIVE,
    startDate: "2025-03-01",
    endDate: undefined,
    estimatedCompletionDate: "2026-11-30",
    projectManagerId: "b6c9d3a2-91fa-4e0c-b3b1-1b7a9c8d0e44",
    clientName: "Metro Development Group",
    city: "Chicago",
    state: "IL",
    country: "US",
    createdAt: "2025-02-15T14:22:00.000Z",
    updatedAt: "2026-01-10T09:45:00.000Z",
  };
}

export async function createProject(
  project: CreateProjectInput,
): Promise<Project> {
  return {
    id: "2d4a1c9f-5a7e-4b8c-8c7d-9e1f3a6b2d99",
    name: "Riverside Residential Complex",
    code: "PRJ-1002",
    description:
      "Mixed-use residential development with retail space on the ground floor.",
    status: Status.PLANNING,
    startDate: "2026-06-01",
    endDate: undefined,
    estimatedCompletionDate: "2028-02-15",
    projectManagerId: "3a9f2b6e-4c1d-4c89-9d2a-6f3e1b7c8a55",
    clientName: "Riverside Properties LLC",
    city: "Austin",
    state: "TX",
    country: "US",
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function updateProject(
  projectId: string,
  payload: UpdateProjectIinput,
): Promise<Project> {
  // find the project , if exists, update the project properties
  // else throw error not found
  return {
    id: "2d4a1c9f-5a7e-4b8c-8c7d-9e1f3a6b2d99",
    name: "Riverside Residential Complex",
    code: "PRJ-1002",
    description:
      "Mixed-use residential development with retail space on the ground floor.",
    status: Status.PLANNING,
    startDate: "2026-06-01",
    endDate: undefined,
    estimatedCompletionDate: "2028-02-15",
    projectManagerId: "3a9f2b6e-4c1d-4c89-9d2a-6f3e1b7c8a55",
    clientName: "Riverside Properties LLC",
    city: "Austin",
    state: "TX",
    country: "US",
    createdAt: "2026-01-05T11:10:00.000Z",
    updatedAt: new Date().toISOString(),
  };
}

export async function deleteProject(projectId: string): Promise<void> {
  //for now its false
  const exists = false;
  if (!exists) {
    throw new Error("Project not found");
  }

  // delete logic
}
