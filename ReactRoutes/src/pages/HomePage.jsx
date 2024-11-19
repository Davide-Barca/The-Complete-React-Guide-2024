import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  return (
    <>
      <h1>Welcome to Homepage!</h1>
      <p>
        Go to <Link to={"/products"}>the list of products</Link>.
      </p>
      <p>
        <button onClick={handleClick}>Navigate</button>
      </p>
    </>
  );
}
