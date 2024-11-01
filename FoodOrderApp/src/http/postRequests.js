const API_ADDRESS = "http://localhost:3000";

export async function addOrder(items, customer) {
    console.log(items, customer)
  const request = await fetch(`${API_ADDRESS}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: {
        items,
        customer,
      },
    }),
  });
  const response = request.json();


  if (!request.ok) {
    throw new Error(request.message || "Failed to fetch available meals", {
      cause: { status: request.status, statusText: request.statusText },
    });
  }

  return response;
}
