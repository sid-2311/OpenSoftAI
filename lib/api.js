

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000/api";

export async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from ${endpoint}`);
    }

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.message || "Something went wrong");
    }

    return data.data;
  } catch (error) {
    console.error(`Fetch error [${endpoint}]:`, error);
    return null;
  }
}
