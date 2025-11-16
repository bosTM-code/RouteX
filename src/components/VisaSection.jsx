import Icon2 from "../assets/GridIcon.svg";
import Bird from "../assets/bird.png";
import VisaCard from "./VisaCard";
import Location from "../assets/Location.svg";
import Security from "../assets/Security.svg";
import GlobeGreen from "../assets/GlobeGreen.svg";
const VisaData = [
  {
    icon: Security,
    title: "Business Visa",
    text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    img: Bird,
  },
  {
    icon: Icon2,
    title: "Working Visa",
    text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    img: Bird,
  },
  {
    icon: Location,
    title: "Student Visa",
    text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    img: Bird,
  },
  {
    icon: GlobeGreen,
    title: "Tourist Visa",
    text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
    img: Bird,
  },
];

function VisaSection() {
  return (
    <div className="w-[70%] mx-auto mb-16">
      <div>
        <div>
          <p></p>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 gap-4">
        {VisaData.map((item) => (
          <VisaCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default VisaSection;
