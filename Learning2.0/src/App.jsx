import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Counter count={count} />
      <Footer />
    </>
  );
}

export default App;
