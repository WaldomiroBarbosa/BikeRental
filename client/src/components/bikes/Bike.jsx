import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BsFillCircleFill } from "react-icons/bs";
import "./index.css";

const Bike = (props) => {
  return (
    <div className="bike__container">
      <Stack direction={"column"} spacing={"20px"}>
        <img src={props.image} alt={"bike01"} />
        <Button variant="contained">Alugar</Button>
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
            <BsFillCircleFill color={props.disponibility ? "green" : "red"} />
          </p>
          <p>{props.location}</p>
        </Stack>
      </div>
    </div>
  );
};

export default Bike;
