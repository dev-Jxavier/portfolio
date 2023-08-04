import Sociais from "../Sociais";

const AboutMe = () => {
  return (
    <div className="flex space-x-12 items-center w-2/4">
      <img
        src="src/assets/profile.jpeg"
        alt="profile"
        className="rounded-full h-64 w-64 shadow-lg"
      />

      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl text-white font-medium">About Me</h1>
        <p className="text-2xl text-white font-light pb-6 ">
          Lorem ipsum dolor sit amet consectetur. Lectus mauris feugiat felis
          libero purus cras. Enim risus nec turpis aliquam. Nunc integer massa
          aliquam adipiscing lorem tristique libero sit et. Sed iaculis sit in
          ullamcorper. Morbi sagittis justo cursus bibendum quisque ipsum a
          habitant diam.
        </p>
        <Sociais />
      </div>
    </div>
  );
};

export default AboutMe;
