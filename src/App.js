import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Web application that provides options to book tables and show the dishes and services in the traditional mediterranean restauran my little lemon"
        />
        <meta name="og:title" content="My Little Lemon" />
        <meta
          name="og:description"
          content="Traditional restaurant that offers the best mediterranean food in town"
        />
        <meta
          name="og:image"
          content="The image of the restaurant My little lemon is a yellow little lemon that represents the simplicity but richness of the mediterranean food that is offered in the restaurant My little lemon"
        />
      </Helmet>
      <Header  />
      <Main />
      <Footer  />
    </>
  );
}

export default App;
