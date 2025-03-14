import { About } from "./component/About/About";
import { Hero } from "./component/Hero/Hero";
import { MyWork } from "./component/Mywork/MyWork";
import { Navbar } from "./component/Navbar/Navbar";
import { Services } from "./component/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  );
};

export default App;
