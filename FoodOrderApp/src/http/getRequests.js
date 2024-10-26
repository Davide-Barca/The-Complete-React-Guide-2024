const API_ADDRESS = "http://localhost:3000";

export async function getAvailableMeals() {
  const request = await fetch(`${API_ADDRESS}/meals`);
  const response = request.json();

  if (!request.ok) {
    throw new Error("Failed to fetch available meals", {
      cause: { status: request.status, statusText: request.statusText },
    });
  }

  return response;
}
