import React from "react";
import Stack from "@mui/material/Stack";
import { BsFillCircleFill } from "react-icons/bs";
import "./index.css";
import RentalModal from "../modal/Rental";

const Bike = (props) => {
  return (
    <div className="bike__container">
      <Stack direction={"column"} spacing={"20px"} alignItems={"center"}>
        <img src={props.image} alt={"bike01"} />
        <RentalModal
          id={props.id}
          locator={props.locator}
          city={props.city}
          states={props.states}
          price={props.priceBike}
          idRental={props.idRental}
        />
      </Stack>
      <div className="description">
        <h3>Descrição:</h3>
        <p>{props.description}</p>
      </div>
      <div className="bike__props">
        <Stack>
          <p>R$ {props.price}/dia</p>
          <p>
            Disponibilidade:
            <BsFillCircleFill
              color={props.disponibility === 1 ? "green" : "red"}
            />
          </p>
          <p>{props.location}</p>
        </Stack>
      </div>
    </div>
  );
};

export default Bike;
