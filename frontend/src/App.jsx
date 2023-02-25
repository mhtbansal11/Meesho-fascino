import "./App.css";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import Content from "./components/content";
import Product from "./components/product";
import Navbar from "./components/Navbar";
import MegaMenu from "./components/megamenu";
function App() {
  return (
    <div>
      <Navbar />
      <MegaMenu/>
      <Content />
      <Product />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
