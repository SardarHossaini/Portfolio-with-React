import { About } from "./component/About/About";
import { Hero } from "./component/Hero/Hero";
import { Navbar } from "./component/Navbar/Navbar";
import { Services } from "./component/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
