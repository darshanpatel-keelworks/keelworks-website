import slider1 from "../../../assets/images/card1.jpeg";
import slider2 from "../../../assets/images/card2.png";
import slider3 from "../../../assets/images/card-3.png";
import greaterImg from "../../../assets/images/_.png";
const Cards = () => {
  return (
    <div className="">
      <div className="w-full bg-grey200">
        <div className="mx-[8rem]">
          <p className="text-[2.68rem] font-bold leading-relaxed pt-[8rem] ">
            Poverty begets poverty. Affluence begets affluence. <br />
            When we help <span className="text-primary500 "> ONE </span>person
            to stable employment, we help families, communities, and nations
          </p>
        </div>
        <div className="w-full">
          <p className="text-[2.68rem] font-bold leading-relaxed mx-[8rem] pt-10 pb-[8rem]">
            Globally,{" "}
            <span className="text-primary500">191 million people </span> are
            unemployed.
            <br />
            This is{" "}
            <span className="text-primary500"> untapped potential.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-white w-full lg:h-screen ">
        <div className="justify-center flex pt-[3.5rem] pb-10 ">
          <p className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-bold ">
            The <span className="text-primary500 ">KeelWorks </span>Solutions
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  sm:gap-2 gap-6 lg:h-4/5">
          <div className="overflow-hidden sm:m-2 md:m-4 lg:m-4 relative group  m-2 ">
            <img src={slider1} alt="" className="w-full h-full object-cover" />
            <div className="intro h-1/6 w-full sm:p-4 md:p-2 lg:p-2 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500  group-hover:cursor-pointer  backdrop-blur-lg bg-black bg-opacity-60">
              <p className="flex justify-between ml-2 items-center xl:justify-start lg:mt-8 md:mt-2 xl:mt-2 mt-8 w-full">
                {/* <span className='text-primary500 font-bold text-6xl sm:text-8xl md:text-5xl lg:text-7xl xl:text-9xl'>01</span> */}
                <div className="w-4/5">
                  <h1 className="text-primary500 font-bold text-2xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-6xl ml-4 w-4/5">
                    KeelMaster
                  </h1>
                </div>
                <div className="w-1/6">
                  <img src={greaterImg} alt="" width={20} height={20} />
                </div>
              </p>
              <p className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-medium m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-4  xl:leading-loose sm:leading-loose ">
                A three-phase approach to support the most challenged unemployed
                and under-employed individuals mitigating barriers to
                sustainable employment.
              </p>
            </div>
          </div>
          <div className="overflow-hidden  sm:m-2 md:m-4 lg:m-4   relative group m-2">
            <img src={slider2} alt="" className="w-full h-full object-cover" />
            <div className=" h-1/6 w-full sm:p-4 md:p-2 lg:p-2  text-white absolute bottom-0 group-hover:h-4/5  group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60">
              <p className="flex  justify-between items-center ml-4 lg:mt-8 md:mt-2 xl:mt-2 mt-8">
                <div className="w-4/5">
                  <h1 className=" text-primary500 font-bold text-2xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-6xl ml-4">
                    KeelMate
                  </h1>
                </div>
                <div className="w-1/6">
                  <img src={greaterImg} alt="" width={20} height={20} />
                </div>
                {/* <span className='text-primary500 font-bold text-6xl sm:text-8xl md:text-5xl lg:text-7xl xl:text-9xl'>02</span> */}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10 leading-relaxed font-medium xl:leading-loose sm:leading-loose">
                Designed to bridge the gap for participants with insufficient
                education and/or experience in our supported fields; better
                positioning them for employment and/or growth.
              </p>
            </div>
          </div>
          <div className="overflow-hidden  sm:m-2 md:m-4 lg:m-4   relative group m-4">
            <img src={slider3} alt="" className="w-full h-full object-cover" />
            <div className=" h-1/6 w-full sm:p-4 md:p-2 lg:p-2 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60">
              <p className="flex justify-between ml-2 items-center lg:mt-8 md:mt-2 xl:mt-2 mt-8">
                <div className="w-4/5">
                  {/* <span className='text-primary500 font-bold text-6xl sm:text-8xl md:text-5xl lg:text-7xl xl:text-9xl '>03</span> */}
                  <h1 className=" text-primary500 font-bold text-2xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-6xl ml-4">
                    KeelWings
                  </h1>
                </div>
                <div className="w-1/6">
                  <img src={greaterImg} alt="" width={20} height={20} />
                </div>
              </p>
              <p className="text-lg  sm:text-xl md:text-2xl lg:text-3xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-4  font-medium  xl:leading-loose sm:leading-loose">
                Assists graduates breakthrough the “lack of experience”
                conundrum while providing them valuable employment coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ********************* Text at the Bottom of Cards ********************* */}
      <div className="w-full bg-grey200">
        <div className="mx-[2rem] md:mx-[8rem]">
          <p className="text-[2rem] font-bold leading-relaxed py-[8rem] md:text-[2.68rem]">
            If you believe in our mission to get people to work, we need your
            support.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
