// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // якщо хочеш без анімації:
    // window.scrollTo(0, 0);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // або "smooth", якщо подобається анімація
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
