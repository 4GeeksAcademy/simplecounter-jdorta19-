import { NavBar } from "./components/NavBar";
import { CounterPage } from "./pages/CounterPage";
import { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { Container } from "react-bootstrap";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("Landing");

  const pageMap = {
    Landing: <LandingPage />,
    Counter: <CounterPage />,
  };

  return (
    <>
      <NavBar currentPage={currentPage} pageSetter={setCurrentPage} />
      <Container>{pageMap[currentPage]}</Container>
    </>
  );
};
export default App;
