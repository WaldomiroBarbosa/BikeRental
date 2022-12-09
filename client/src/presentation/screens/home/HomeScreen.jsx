import React from "react";
import Appbar from "../../../components/appbar/Appbar";
import "./index.css";
import Bike from "../../../components/bikes/Bike";
import { bikes } from "../../mock/bike";
import BikeAdd from "../../../components/modal/BikeAdd";

const HomeScreen = () => {
  return (
    <div className="app">
      <Appbar />
      <div className={"title__container"}>
        <h1>
          Procurando por uma locomoção econômica? Alugue já sua bicicleta!
        </h1>
        <BikeAdd />
      </div>
      <div className={"bikes__container"}>
        {bikes.map((data) => {
          return (
            <>
              <Bike
                image={data.image}
                description={data.description}
                price={data.price}
                location={data.location}
                disponibility={data.disponibility}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
