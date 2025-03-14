import { About } from "./component/About/About";
import { Contact } from "./component/Contact/Contact";
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
      <Contact />
    </div>
  );
};

export default App;
