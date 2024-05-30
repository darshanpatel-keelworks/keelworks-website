import slide1 from "../../../assets/images/banner.jpeg";

const Banner = () => {
  return (
    <div
      className="relative w-screen h-[calc(100vh-4rem)] overflow-hidden bg-center bg-no-repeat bg-cover lg:bg-[size:150%] lg:bg-left"
      // className="relative w-screen h-[calc(100vh-4rem)] bg-left bg-no-repeat bg-[size:150%]"
      style={{
        backgroundImage: `url(${slide1})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-[2px] md:w-1/2 lg:justify-start lg:backdrop-blur-lg">
        {/* <div className="absolute top-0 left-0 w-1/2 h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg"> */}
        <div className="mx-[2rem] md:mx-[8rem]">
          <h1 className="text-[3rem] leading-[3.5rem] md:text-[4rem] md:leading-[4.5rem] font-bold text-white">
            We Can Do <br /> This! <br />
            But Only
            <br /> With
            <span className="text-primary500">
              {" "}
              Your <br />
              Help.
            </span>
          </h1>
          <h5 className="text-[1.5rem] font-bold text-white mt-6">
            When we come together,
            <br /> we can transform lives.
          </h5>
          <div className="flex justify-between mt-6 lg:justify-normal lg:gap-6">
            {/* <div className="flex gap-6 mt-6"> */}
            <button className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[100ms] ease-linear text-[#101828] font-semibold">
              Donate
            </button>
            <button className="w-[156px] h-[47px] border-primary500 border-solid border-[4px] rounded-full hover:bg-primary300 transition duration-[100ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold">
              Get involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
