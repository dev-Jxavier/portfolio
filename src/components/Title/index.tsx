const Title = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <h2 className="font-extralight text-2xl text-white">Hello</h2>
      <h1 className="font-light text-6xl text-white">
        I am{" "}
        <strong className="font-normal text-7xl text-white">João Xavier</strong>
      </h1>
      <div className="flex items-center space-x-10">
        <hr className="w-12" />
        <h3 className="font-extralight text-2xl text-white">
          Software Enginner
        </h3>
        <hr className="w-12" />
      </div>
    </div>
  );
};

export default Title;
