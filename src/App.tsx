import "@/styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import WhyMarico from "./components/WhyMarico/WhyMarico";
import Step1 from "./components/Step-1/Step1";
import Step2 from "./components/Step-2/Step2";
import YourHomePage from "./components/YourHomePage/YourHomePage";
import OneLink from "./components/OneLink/OneLink";
import Step3 from "./components/Step-3/Step3";
import CreateAndShare from "./components/CreateAndShare/CreateAndShare";
import ExpertsAgree from "./components/ExpertsAgree/ExpertsAgree";
import HelpedCreators from "./components/HelpedCreators/HelpedCreators";
import GetStartedNow from "./components/GetStartedNow/GetStartedNow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WhyMarico />
      <Step1 />
      <YourHomePage />
      <Step2 />
      <OneLink />
      <Step3 />
      <CreateAndShare />
      <ExpertsAgree />
      <HelpedCreators />
      <GetStartedNow />
      <Footer />
    </div>
  );
}

export default App;
