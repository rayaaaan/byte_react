import Hero from "./hero";
import Cards from "./cards";
import Footer from "./footer";

function Body() {
  return (
    <div className="body">
      <Hero />
      <div className="hr_continer">
        <hr className="hr" />
      </div>
      <Cards />
      <Footer />
    </div>
  );
}
export default Body;
