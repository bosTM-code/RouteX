import Travel1 from "../assets/Travel1.jpg";
import Travel2 from "../assets/Travel2.png";
import Paris1 from "../assets/paris.jpg";
import Paris2 from "../assets/paris2.jpg";
import Paris3 from "../assets/paris3.png";

const galleryItems = [
  {
    id: 1,
    image: Travel1,
    title: "Консультація перед поданням на візу",
    location: "Мюнхен, Німеччина",
  },
  {
    id: 2,
    image: Travel2,
    title: "Підготовка до переїзду всією сімʼєю",
    location: "Торонто, Канада",
  },
  {
    id: 3,
    image: Paris1,
    title: "Перші дні після успішної релокації",
    location: "Париж, Франція",
  },
  {
    id: 4,
    image: Paris2,
    title: "Навчання за кордоном",
    location: "Амстердам, Нідерланди",
  },
  {
    id: 5,
    image: Paris3,
    title: "Карʼєра в іноземній компанії",
    location: "Лісабон, Португалія",
  },
  {
    id: 6,
    image: Travel1,
    title: "Нова віза — нові можливості",
    location: "Відень, Австрія",
  },
];

function GalleryGrid() {
  return (
    <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            className="rounded-3xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-64 sm:h-60 md:h-64 lg:h-72 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="px-5 py-4 bg-white">
              <p className="text-sm font-semibold text-darkGreen">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GalleryGrid;
