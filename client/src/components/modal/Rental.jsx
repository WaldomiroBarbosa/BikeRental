import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsFillCartCheckFill } from "react-icons/bs";
import qrcode from "../../assets/images/qrcode.png";
import { Stack, TextField } from "@mui/material";
import Axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid transparent",
  borderRadius: "10px",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  p: 4,
};

const RentalModal = (props) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userName, setUserName] = useState("");

  const handleHistoric = () => {
    Axios.post("http://localhost:3001/api/insert/historic", {
      id: props.id,
      user: userName,
      locator: props.locator,
      city: props.city,
      states: props.states,
      price: props.price,
    }).then(() => {
      alert("Logado com sucesso!");
    });

    if (
      props.id === "" &&
      props.description === "" &&
      props.locator === "" &&
      props.citySelect === "" &&
      props.uf === "" &&
      props.price === "" &&
      props.photo === "" &&
      userName === ""
    ) {
      setError(true);
    } else {
      handleClose();
    }
  };

  return (
    <div id={props.idRental}>
      <Button onClick={handleOpen} variant={"contained"}>
        Alugar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
          >
            <BsFillCartCheckFill style={{ color: "green" }} /> Aluguel quase
            concluído!
            <Typography fontSize={"12px"}>
              Para concluir o aluguel, escaneie o QRCode abaixo e realize o
              pagamento!
            </Typography>
          </Typography>
          <Stack direction={"column"} spacing={"20px"} alignItems={"center"}>
            <img src={qrcode} alt={"bike01"} style={{ width: "300px" }} />
            {error ? (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "200",
                }}
              >
                *Preencha todos os campos corretamente
              </span>
            ) : null}
            <Stack alignItems={"center"} spacing={"8px"}>
              <TextField
                id="outlined-error3"
                label="Escreva seu nome"
                size="medium"
                type={"text"}
                sx={{ width: "100%" }}
                name={"userName"}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Button onClick={handleHistoric} variant={"contained"}>
                Pagamento realizado
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default RentalModal;
