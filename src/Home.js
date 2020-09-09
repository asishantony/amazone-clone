import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
          alt="Home"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="Apple iPhone 11 (64GB) - Black"
            price={500}
            image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
            rating={5}
          />
          <Product
            title="Infinity (JBL) Glide 120 Metal in-Ear Wireless Flex Neckband with Bluetooth 5.0 and IPX5 Sweatproof (Black and Red)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/619OijH9HnL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Infinity (JBL) Glide 120 Metal in-Ear Wireless Flex Neckband with Bluetooth 5.0 and IPX5 Sweatproof (Black and Red)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/619OijH9HnL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="boAt Bassheads 242 Wired Sports Earphones with HD Sound, 10 mm Dynamic Drivers, IPX 4 Sweat and Water Resistance, Superior Coated Cable, in-Line Mic"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61jRBK9c%2ByL._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Think Like a Monk Paperback – 8 September 2020"
            price={390}
            image="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
