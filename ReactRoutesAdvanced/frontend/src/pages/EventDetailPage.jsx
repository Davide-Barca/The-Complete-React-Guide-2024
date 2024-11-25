import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const { event } = useRouteLoaderData("event-detail");

  return <EventItem event={event} />;
}

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw response;
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const { eventId } = params;  

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });


  if (!response.ok) {
    throw response;
  }

  return redirect("/events");
}
