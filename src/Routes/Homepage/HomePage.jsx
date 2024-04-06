import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find your Real-Estate with HS-Estates.</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis voluptatum similique minus facere quasi voluptate
            consequuntur cumque voluptatibus!
          </p>

          {/* import search bar */}
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awarders</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Avaible places</h2>
            </div>
          </div>
        </div>
      </div>
      {/* image container */}
      <div className="img-container">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
