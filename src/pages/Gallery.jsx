import HeroCommon from "../components/HeroCommon";
import GalleryGrid from "../components/GalleryGrid";
import GalleryContactSection from "../components/GalleryContactSection";

function Gallery() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2] min-h-screen">
      <HeroCommon title="Галерея" />
      <GalleryGrid />
      <GalleryContactSection />
    </div>
  );
}

export default Gallery;
