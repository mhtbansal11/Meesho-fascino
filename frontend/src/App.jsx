import "./App.css";
import WithSubnavigation from "./components/mainNav";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import Content from "./components/content";
import Product from "./components/product";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <WithSubnavigation />
      <Content />
      <Product />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
