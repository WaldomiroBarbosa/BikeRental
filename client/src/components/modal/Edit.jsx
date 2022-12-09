import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./index.css";

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

const EditModal = (props) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button id={"buttonEdit"} variant="outlined" onClick={handleOpen}>
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
            <h2 className="main__container">Edite suas informações!</h2>
            <TextField
              id="outlined-error10"
              label="Escreva seu novo e-mail"
              size="medium"
              sx={{ width: "70%" }}
              name={"email"}
              onChange={props.setEmail}
            />
            <TextField
              id="outlined-error20"
              label="Digite sua nova senha"
              size="medium"
              type={"password"}
              sx={{ width: "70%" }}
              name={"password"}
              onChange={props.setPassword}
            />
            <TextField
              id="outlined-error30"
              label="Digite seu novo celular"
              size="medium"
              sx={{ width: "70%" }}
              name={"cellphone"}
              onChange={props.setCellphone}
            />
            <Button
              id={"buttonConfirm"}
              variant="contained"
              sx={{ width: "70%" }}
              onClick={props.onClick}
            >
              Confirmar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
