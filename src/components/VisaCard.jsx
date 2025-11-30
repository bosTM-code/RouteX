import { Link } from "react-router-dom";
import ArrowTopRight from "../assets/ArrowTopRight.svg";

function VisaCard({ icon, title, text, img, to = "/visa", className = "" }) {
  return (
    <div
      className={
        "border border-gray-300 rounded-xl bg-white shadow-sm " + className
      }
    >
      <div className="flex flex-col md:flex-row p-5 ">
        {/* Картинка зліва */}
        <div className="self-center max-w-[250px] w-full md:w-auto">
          {img && (
            <img
              src={img}
              alt={title}
              className="w-full h-full rounded-xl object-cover"
            />
          )}
        </div>

        {/* Текст справа */}
        <div className="flex flex-col gap-4 justify-between p-6 flex-1">
          <h6 className=" text-darkGreen font-bold text-xl">{title}</h6>
          <p className="text-gray-500 text-base">{text}</p>

          <div className="flex justify-between items-center">
            {/* Кнопка-стрілочка з переходом */}
            <Link
              to={to}
              className="border border-lightGreen p-4 rounded-2xl hover:bg-darkGreen transition-all duration-300 ease-in inline-flex items-center justify-center"
            >
              <img src={ArrowTopRight} alt="Докладніше" />
            </Link>

            {icon && <img src={icon} alt="" className="-translate-x-6" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaCard;
