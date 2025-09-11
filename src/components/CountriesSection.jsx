import PassWhite from "../assets/PassWhite.svg";
import ArrowRightSmall from "../assets/ArrowRightSmall.svg";
import ArrowLeftSmall from "../assets/ArrowLeftSmall.svg";
import ArrowRight from "../assets/arrowRight.svg";

function CountriesSection() {
  return (
    <section className=" w-11/12 bg-darkGreen rounded-3xl mx-auto px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-24 lg:px-18 lg:py-32 overflow-hidden my-14">
      {/* UPPER */}
      <div className="w-[71.66%] mx-auto flex justify-between mb-8 md:mb-14 ">
        <div className="text-white">
          <div className="flex items-center gap-1 justify-center md:justify-normal">
            <img src={PassWhite} alt="" />
            <p className="uppercase text-xl font-bold md:font-normal md:text-sm">
              Our Countries
            </p>
          </div>

          <h3 className="w-2/3 text-[1.05rem] md:text-[1.25rem] xl:text-[3rem] md:font-bold mx-auto md:mx-0">
            Making Memories Around World Unforgettable
          </h3>
        </div>
        <div className="self-end hidden md:flex flex-shrink-0 gap-3">
          <button className=" p-6 bg-darkGreen rounded-full border border-white hover:bg-lightGreen hover:border-lightGreen">
            <img src={ArrowLeftSmall} alt="" />
          </button>
          <button className=" p-6 bg-darkGreen rounded-full border border-white hover:bg-lightGreen hover:border-lightGreen">
            <img src={ArrowRightSmall} alt="" />
          </button>
        </div>
      </div>
      {/* LOWER */}
      <div className=" py-1 px-1 rounded-xl grid-cols-2 sm:grid-cols-4 grid md:grid-cols-6 xl:grid-cols-12 gap-5 w-[71.66%] mx-auto">
        {/* FIRST */}
        <div className="h-full flex flex-col justify-between bg-gray-400 rounded-xl col-span-2">
          <div className="self-end p-5">
            <div className="inline-block p-6 border border-lightGreen rounded-full" />
          </div>
          <div className="hidden">
            <h6>Working Visa</h6>
            <p>
              Lorem Ipsum is simply dummy text the printing and provide best
              visa ever
            </p>
            <button className="flex gap-1 items-center">
              <span>Apply Now</span>
              <img src="" alt="" />
            </button>
          </div>
        </div>
        {/* SECOND */}
        <div className="h-full flex flex-col justify-between bg-gray-400 rounded-xl col-span-2 sm:col-span-4">
          <div className="self-end p-5">
            <div className="inline-block p-5 border border-lightGreen rounded-full" />
          </div>
          <div className="bg-lightGreen rounded-xl m-2 p-7 flex-[0.6] flex flex-col justify-between gap-3 text-white">
            <h6 className="text-xl font-bold">Working Visa</h6>
            <p>
              Lorem Ipsum is simply dummy text the printing and provide best
              visa ever
            </p>
            <button className="self-start flex gap-1 items-center px-7 py-4 border border-white rounded-full hover:shadow-2xl transition-all duration-500">
              <span className="text-white">Apply Now</span>
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
        {/* THIRD */}
        <div className="h-full flex flex-col justify-between bg-gray-400 rounded-xl col-span-2">
          <div className="self-end p-5">
            <div className="inline-block p-5 border border-lightGreen rounded-full" />
          </div>
          <div className="hidden">
            <h6>Working Visa</h6>
            <p>
              Lorem Ipsum is simply dummy text the printing and provide best
              visa ever
            </p>
            <button className="flex gap-1 items-center">
              <span>Apply Now</span>
              <img src="" alt="" />
            </button>
          </div>
        </div>
        {/* FORTH */}
        <div className="h-full flex flex-col justify-between bg-gray-400 rounded-xl col-span-2">
          <div className="self-end p-5">
            <div className="inline-block p-5 border border-lightGreen rounded-full" />
          </div>
          <div className="hidden">
            <h6>Working Visa</h6>
            <p>
              Lorem Ipsum is simply dummy text the printing and provide best
              visa ever
            </p>
            <button className="flex gap-1 items-center">
              <span>Apply Now</span>
              <img src="" alt="" />
            </button>
          </div>
        </div>
        {/* FIFTH */}
        <div className="h-full flex flex-col justify-between bg-gray-400 rounded-xl col-span-2">
          <div className="self-end p-5">
            <div className="inline-block p-5 border border-lightGreen rounded-full" />
          </div>
          <div className="hidden">
            <h6>Working Visa</h6>
            <p>
              Lorem Ipsum is simply dummy text the printing and provide best
              visa ever
            </p>
            <button className="flex gap-1 items-center">
              <span>Apply Now</span>
              <img src="" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountriesSection;
