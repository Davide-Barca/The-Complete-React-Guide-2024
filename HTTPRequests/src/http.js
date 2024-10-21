export async function fetchAvailablePlaces() {
  const request = await fetch("http://localhost:3000/places");
  const response = await request.json();

  if (!request.ok) {
    throw new Error("Failed to fetch data!");
  }

  return response.places;
}

export async function updateUserPlaces(places) {
  const request = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = request.json();

  if (!request.ok) {
    throw new Error("Failed to updated user data!");
  }

  return response.message;
}
