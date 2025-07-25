import { useState } from "react";
import Header from "./components/header/Header";
import Results from "./components/results/Results";
import UserInput from "./components/userInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputId, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputId]: +newValue,
    }));
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
