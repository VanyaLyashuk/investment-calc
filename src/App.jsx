import { useState } from "react";
import Header from "./components/header/Header";
import UserInput from "./components/userInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputId, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputId]: newValue,
    }));
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
    </>
  );
}

export default App;
