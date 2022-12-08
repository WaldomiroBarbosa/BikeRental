import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./index.css";
import Axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid #000",
  borderRadius: "10px",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  p: 4,
};

const BikeAdd = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [locator, setLocator] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(true);
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  console.log(id);

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/api/insert/bike", {
      id: id,
      description: description,
      locator: locator,
      city: city,
      state: state,
      price: price,
      photo: photo,
    }).then(() => {
      alert("Logado com sucesso!");
    });
    if (
      id === "" &&
      description === "" &&
      locator === "" &&
      city === "" &&
      price === "" &&
      photo === ""
    ) {
      setError(true);
    } else {
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Adicionar bicicleta de aluguel
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
          borderColor: "blue",
        }}
      >
        <Box sx={style}>
          <Stack alignItems={"center"} spacing={4}>
            <h2 className="main__container">Cadastre sua bicicleta</h2>
            <TextField
              id="outlined-error1"
              label="Id da Bicicleta"
              size="medium"
              sx={{ width: "70%" }}
              name={"id"}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <TextField
              id="outlined-error2"
              label="Entre com a Descrição"
              size="medium"
              type={"text"}
              sx={{ width: "70%" }}
              name={"description"}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <TextField
              id="outlined-error3"
              label="Entre com o seu Nome"
              size="medium"
              sx={{ width: "70%" }}
              name={"locator"}
              onChange={(e) => {
                setLocator(e.target.value);
              }}
            />
            <TextField
              id="outlined-error4"
              label="Digite sua Cidade"
              size="medium"
              sx={{ width: "70%" }}
              name={"city"}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <TextField
              id="outlined-error5"
              label="Digite o Preço"
              size="medium"
              sx={{ width: "70%" }}
              name={"price"}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              id="outlined-error6"
              label="Selecione uma Imagem"
              size="medium"
              type={"file"}
              sx={{ width: "70%" }}
              InputLabelProps={{
                shrink: true,
              }}
              name={"photo"}
              onChange={(e) => {
                setPhoto(e.target.value);
                console.log("photo: ", e.target.value);
              }}
            />
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
            <Button
              variant="contained"
              sx={{ width: "70%" }}
              onClick={handleSubmit}
            >
              Criar Aluguel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default BikeAdd;
