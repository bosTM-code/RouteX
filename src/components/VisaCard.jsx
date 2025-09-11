import ArrowTopRight from "../assets/ArrowTopRight.svg";

function VisaCard({ icon, title, text, img }) {
  return (
    <div className="col-span-2 2xl:max-w-[630px] border border-gray-600 rounded-xl">
      <div className="flex flex-col 2xl:flex-row p-5 ">
        <div className=" self-center max-w-[250px]">
          <img src={img} alt="" className=" rounded-xl" />
        </div>

        <div className="flex flex-col gap-4 justify-between p-6">
          <h6 className=" text-darkGreen font-bold text-xl">{title}</h6>
          <p className="text-gray-500 text-base">{text}</p>
          <div className="flex justify-between">
            <button className="border border-lightGreen p-4 rounded-2xl hover:bg-darkGreen transition-all duration-300 ease-in">
              <img src={ArrowTopRight} alt="" />
            </button>
            <img
              src={icon}
              alt=""
              className=" -translate-x-6 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaCard;
