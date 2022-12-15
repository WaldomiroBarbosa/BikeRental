import React, { useState, useEffect } from "react";
import "./index.css";
import { Stack } from "@mui/system";
import Axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditModal from "../../../components/modal/Edit";

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

const ProfileScreen = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState([]);
  const name = "Thais de Souza";
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCellphone, setNewCellphone] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/register").then((response) => {
      setProfile(response.data);
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
          <h4>Usuária</h4>
          <h4>Itajubá - Minas Gerais</h4>
        </Stack>
      </div>
      <div className="personal__informations">
        {profile.map((values) => {
          if (values.full_name === name) {
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
          }
        })}
      </div>
    </div>
  );
};

export default ProfileScreen;
