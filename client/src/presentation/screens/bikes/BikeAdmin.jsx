import React, { useState, useEffect } from "react";
import "./index.css";
import { Stack } from "@mui/system";
import Axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { BsFillCircleFill } from "react-icons/bs";

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

const BikeAdminScreen = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState([]);
  const name = "Admin";
  const navigate = useNavigate();
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newPhoto, setNewPhoto] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/bikes").then((response) => {
      setProfile(response.data);
    });
  }, []);

  const handleDeleteBike = (locator) => {
    Axios.delete(`http://localhost:3001/api/delete/bike/${locator}`);
    navigate("/");
  };

  const handleEditBike = (locatori) => {
    Axios.put("http://localhost:3001/api/update/bike", {
      locator: locatori,
      description: newDescription,
      price: newPrice,
      photo: newPhoto,
    });
  };

  return (
    <div className="main__container">
      <div className="user__container">
        <h2>Bem-vindo(a)!</h2>
        <Stack spacing={0.5}>
          <h2>{name}</h2>
          <h4>Usuário Prioritário</h4>
          <h4>Itajubá - Minas Gerais</h4>
        </Stack>
      </div>
      <div className="personal__informations">
        {profile.map((values) => {
          if (values.locator === name || name === "Admin") {
            return (
              <>
                <p>Id: {values.id}</p>
                <p>Descrição: {values.description}</p>
                <p>Locator: {values.locator}</p>
                <p>
                  Cidade e Estado: {values.city} - {values.states}
                </p>
                <p>
                  Estado:{" "}
                  {values.state === 1 ? (
                    <>
                      Disponível <BsFillCircleFill color={"green"} />
                    </>
                  ) : (
                    <>
                      Disponível <BsFillCircleFill color={"red"} />
                    </>
                  )}
                </p>
                <p>Preço: R$ {values.price}/dia</p>
                <Stack
                  marginTop={"1rem"}
                  direction={"row"}
                  spacing="15px"
                  width={"100%"}
                >
                  <div>
                    <Button variant="outlined" onClick={handleOpen}>
                      Editar Informações
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
                          <h2 className="main__container">
                            Edite suas informações!
                          </h2>
                          <TextField
                            id="outlined-error1"
                            label="Escreva a nova descrição"
                            size="medium"
                            sx={{ width: "70%" }}
                            name={"description"}
                            onChange={(e) => {
                              setNewDescription(e.target.value);
                            }}
                          />
                          <TextField
                            id="outlined-error2"
                            label="Digite o novo preço"
                            size="medium"
                            type={"text"}
                            sx={{ width: "70%" }}
                            name={"price"}
                            onChange={(e) => {
                              setNewPrice(e.target.value);
                            }}
                          />
                          <TextField
                            id="outlined-error3"
                            label="Selecione uma nova Imagem"
                            size="medium"
                            type={"file"}
                            sx={{ width: "70%" }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name={"photo"}
                            onChange={(e) => {
                              setNewPhoto(e.target.value);
                            }}
                          />
                          <Button
                            variant="contained"
                            sx={{ width: "70%" }}
                            onClick={() => {
                              handleEditBike(values.locator);
                            }}
                          >
                            Confirmar
                          </Button>
                        </Stack>
                      </Box>
                    </Modal>
                  </div>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={() => {
                      handleDeleteBike(values.locator);
                    }}
                  >
                    Excluir Bicicleta
                  </Button>
                </Stack>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BikeAdminScreen;
