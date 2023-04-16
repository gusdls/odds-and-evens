import Banner01 from "../images/banner01.jpg";
import Banner02 from "../images/banner02.jpg";
import Banner03 from "../images/banner03.jpg";

function Banners() {
  return (
    <>
      <img src={Banner01} alt="banner01" className="w-80 h-20 animate-flash" />
      <img src={Banner02} alt="banner02" className="w-80 h-20 animate-flash" />
      <img
        src={Banner03}
        alt="banner03"
        className="w-80 h-20 animate-flash-later"
      />
    </>
  );
}

export default Banners;
