import logoImg from "../../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="Dollar bag with coins" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
