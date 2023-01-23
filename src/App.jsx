import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/toggle";
import Presentation from "./components/presentation/presentation";
import { useContext } from "react";
import { ThemeContext } from "./context";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

library.add(faCheckSquare);


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div style={{        backgroundColor: darkMode ? "#222" : "white",
  color: darkMode && "white",
}}>
    <Intro />
    <Presentation />
    <ProductList />
    <Contact />
    <Toggle />

    </div>;
};

export default App;