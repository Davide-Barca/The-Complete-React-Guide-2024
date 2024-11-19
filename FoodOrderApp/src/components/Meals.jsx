import Meal from "./Meal";
import { useHTTP } from "../hooks/useFetch";
import { getAvailableMeals } from "../http/getRequests";


const API_ADDRESS = "http://localhost:3000";

const requestConfig = {}

export default function Meals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/meals", requestConfig, []);

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
