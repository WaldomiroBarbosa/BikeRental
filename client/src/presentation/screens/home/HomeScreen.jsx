import React, { useState, useEffect } from "react";
import Appbar from "../../../components/appbar/Appbar";
import "./index.css";
import Bike from "../../../components/bikes/Bike";
import { bikes } from "../../mock/bike";
import BikeAdd from "../../../components/modal/BikeAdd";
import Axios from "axios";
import bikeDefault from "../../../assets/images/bike03.jpg";

const HomeScreen = () => {
  const [bike, setBike] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/bikes").then((response) => {
      setBike(response.data);
    });
  }, []);

  return (
    <div className="app">
      <div className={"title__container"}>
        <h1>
          Procurando por uma locomoção econômica? Alugue já sua bicicleta!
        </h1>
        <BikeAdd />
      </div>
      <div className={"bikes__container"}>
        {/* {bikes.map((data) => {
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
        })} */}
        {bike.map((data, index) => {
          return (
            <>
              {data.id === "" ? null : (
                <Bike
                  image={bikeDefault}
                  description={data.description}
                  price={data.price}
                  location={data.city + " - " + data.states}
                  disponibility={data.state}
                  id={data.id}
                  locator={data.locator}
                  city={data.city}
                  states={data.states}
                  priceBike={data.price}
                  idRental={index}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
