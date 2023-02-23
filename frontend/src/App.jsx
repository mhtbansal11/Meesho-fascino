import "./App.css";
import WithSubnavigation from "./components/mainNav";
import Nav from "./components/2";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
function App() {
  return (
    <div>
      <Nav />
      <WithSubnavigation />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
