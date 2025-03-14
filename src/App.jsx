import { About } from "./component/About/About";
import { Hero } from "./component/Hero/Hero";
import { Navbar } from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
