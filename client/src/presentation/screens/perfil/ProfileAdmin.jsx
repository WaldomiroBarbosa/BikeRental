import React, { useState, useEffect } from "react";
import "./index.css";
import { Stack } from "@mui/system";
import Axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditModal from "../../../components/modal/Edit";
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

const ProfileAdminScreen = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState([]);
  const [historic, setHistoric] = useState([]);
  const [bikes, setBikes] = useState([]);
  const name = "Admin";
  const navigate = useNavigate();

  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newPhoto, setNewPhoto] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCellphone, setNewCellphone] = useState("");
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
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/register").then((response) => {
      setProfile(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/bikes").then((response) => {
      setBikes(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/historic").then((response) => {
      setHistoric(response.data);
    });
  }, []);

  const handleDeleteUser = (fname) => {
    Axios.delete(`http://localhost:3001/api/delete/${fname}`);
    navigate("/");
  };

  const handleEditUser = (fname) => {
    Axios.put("http://localhost:3001/api/update/user", {
      full_Name: fname,
      password: newPassword,
      email: newEmail,
      cellphone: newCellphone,
    });
  };

  return (
    <div className="main__container">
      <div className="user__container">
        <h2>Bem-vindo(a)!</h2>
        <Stack spacing={0.5}>
          <h2>{name}</h2>
          <h4>Usu??rio Priorit??rio</h4>
          <h4>Itajub?? - Minas Gerais</h4>
        </Stack>
      </div>
      <h2>Usu??rios Criados</h2>
      <div className="personal__informations">
        {profile.map((values) => {
          return (
            <>
              <p>Nome: {values.full_name}</p>
              <p>E-mail: {values.email}</p>
              <p>CPF: {values.cpf}</p>
              <p>Data de Nascimento: {values.birthdate}</p>
              <p>Celular: {values.cellphone}</p>
              <p>Cidade: {values.city}</p>
              <Stack
                marginTop={"1rem"}
                direction={"row"}
                spacing="15px"
                width={"100%"}
              >
                <EditModal
                  setEmail={(e) => setNewEmail(e.target.value)}
                  setPassword={(e) => setNewPassword(e.target.value)}
                  setCellphone={(e) => setNewCellphone(e.target.value)}
                  onClick={() => {
                    handleEditUser(values.full_name);
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={() => {
                    handleDeleteUser(values.full_name);
                  }}
                >
                  Excluir Conta
                </Button>
              </Stack>
            </>
          );
        })}
      </div>
      <h2>Bicicletas Criadas</h2>
      <div className="personal__informations">
        {bikes.map((values) => {
          return (
            <>
              <p>Id: {values.id}</p>
              <p>Descri????o: {values.description}</p>
              <p>Locator: {values.locator}</p>
              <p>
                Cidade e Estado: {values.city} - {values.states}
              </p>
              <p>
                Estado:{" "}
                {values.state === 1 ? (
                  <>
                    Dispon??vel <BsFillCircleFill color={"green"} />
                  </>
                ) : (
                  <>
                    Dispon??vel <BsFillCircleFill color={"red"} />
                  </>
                )}
              </p>
              <p>Pre??o: R$ {values.price}/dia</p>
              <Stack
                marginTop={"1rem"}
                direction={"row"}
                spacing="15px"
                width={"100%"}
              >
                <div>
                  <Button variant="outlined" onClick={handleOpen}>
                    Editar Informa????es
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
                          Edite suas informa????es!
                        </h2>
                        <TextField
                          id="outlined-error1"
                          label="Escreva a nova descri????o"
                          size="medium"
                          sx={{ width: "70%" }}
                          name={"description"}
                          onChange={(e) => {
                            setNewDescription(e.target.value);
                          }}
                        />
                        <TextField
                          id="outlined-error2"
                          label="Digite o novo pre??o"
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
        })}
      </div>
      <div className="personal__informations">
        <h2>Hist??rico de Aluguel dos Usu??rios</h2>
        {historic.map((data) => {
          return (
            <>
              <h3>Aluguel feito por {data.user}</h3>
              <tbody>
                <tr>Locator: {data.locator}</tr>
                <tr>Id: {data.id}</tr>
                <tr>
                  Cidade e Estado: {data.city} - {data.states}
                </tr>
                <tr>Pre??o: R$ {data.price}/dia</tr>
              </tbody>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileAdminScreen;
