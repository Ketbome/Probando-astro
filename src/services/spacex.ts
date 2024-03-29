import { type APIxLaunches, type Doc } from "../types/api";

export const getLaunchById = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const launch = (await res.json()) as Doc;
  return launch;
};

export const getLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        date_unix: "asc",
      },
      limit: 12,
    }),
  });

  const { docs: launches } = (await res.json()) as APIxLaunches;
  return launches;
};

export const getLaunchesOldest = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        flight_number: "desc",
      },
      limit: 12,
    }),
  });

  const { docs: launches } = (await res.json()) as APIxLaunches;
  return launches;
};
