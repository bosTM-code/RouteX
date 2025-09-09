import Travel1 from "../assets/Travel1.jpg";
import Travel2 from "../assets/Travel2.png";

function DreamSection() {
  return (
    <div className="w-2/3 mx-auto flex justify-between ">
      <div className=" grid grid-cols-2 gap-6">
        <div>
          <img src={Travel1} alt="" />
        </div>
        <div></div>
        <div></div>
        <div>
          <img src={Travel2} alt="" />
        </div>
      </div>
      <div className="">
        <div className="">
          <img src="" alt="" />
          <span>Why choose us</span>
        </div>
        <h3>
          Where Wanderlust Meets{" "}
          <span className="text-darkGreen">Dream Destinations</span>{" "}
        </h3>
        <p>
          Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
          venenatis cras sed eu massa Et purus duis sollicitudin dignissim
          habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis
          sollicitudin dignissim habitant. Egestas nulla
        </p>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <button></button>
          <div>
            <img src="" alt="" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamSection;
