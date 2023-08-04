import AboutMe from "./components/AboutMe";
import Sociais from "./components/Sociais";
import TimeLine from "./components/TimeLine";
import Title from "./components/Title";

const App = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat h-full"
      style={{ backgroundImage: "url(src/assets/background.jpg)" }}
    >
      <div className="flex flex-col items-center space-y-9 h-screen justify-center">
        <Title />
        <Sociais />
      </div>
      <div className="flex items-center justify-center py-32 bg-gray-900">
        <AboutMe />
      </div>
      <div className="flex flex-col items-center py-16">
        <TimeLine />
      </div>
    </div>
  );
};

export default App;
