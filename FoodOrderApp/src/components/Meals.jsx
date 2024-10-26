import Meal from "./Meal";
import { useFetch } from "../hooks/useFetch";
import { getAvailableMeals } from "../http/getRequests";


const API_ADDRESS = "http://localhost:3000";

export default function Meals() {
  const {
    fetchedData: availableMeals,
    isFetching,
    error,
  } = useFetch(getAvailableMeals, []);

  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <Meal
          key={meal.id}
          meal={meal}
        />
      ))}
    </ul>
  );
}
