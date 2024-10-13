import { useState } from "react";

import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx";

const INITIAL_DATA = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.6,
  duration: 5,
};

function App() {
  const [userData, setUserData] = useState(INITIAL_DATA);

  return (
    <>
      <UserInput userData={userData} setUserData={setUserData} />
      <Results userData={userData} />
    </>
  );
}

export default App;
