import React from "react";
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

const BasicModal = (props) => {
  return (
    <div>
      <Button id={props.id} variant="outlined" onClick={props.handleOpen}>
        Criar nova Conta
      </Button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
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
          <Stack alignItems={"center"} spacing={4} marginTop={"4rem"}>
            <h2 className="main__container">Cadastre-se com seus dados!</h2>
            <TextField
              id="outlined-error1"
              label="Nome Completo"
              size="medium"
              sx={{ width: "70%" }}
              name={"full_name"}
              onChange={(e) => props.setFullName(e.target.value)}
            />
            <TextField
              id="outlined-error2"
              label="Entre com sua senha"
              size="medium"
              type={"password"}
              sx={{ width: "70%" }}
              name={"password"}
              onChange={(e) => props.setPassword(e.target.value)}
            />
            <TextField
              id="outlined-error3"
              label="Entre com o seu e-mail"
              size="medium"
              sx={{ width: "70%" }}
              name={"email"}
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <TextField
              id="outlined-error4"
              label="Digite seu CPF"
              size="medium"
              sx={{ width: "70%" }}
              name={"cpf"}
              onChange={(e) => props.setCpf(e.target.value)}
            />
            <TextField
              id="outlined-error5"
              label={"Data de Nascimento"}
              size="medium"
              type={"date"}
              sx={{ width: "70%" }}
              name={"birthdate"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => props.setBirthdate(e.target.value)}
            />
            <TextField
              id="outlined-error6"
              label="Digite seu celular"
              size="medium"
              sx={{ width: "70%" }}
              type={"tel"}
              name={"cellphone"}
              onChange={(e) => props.setCellphone(e.target.value)}
            />
            <TextField
              id="outlined-error7"
              label="Digite sua cidade"
              size="medium"
              sx={{ width: "70%" }}
              name={"city"}
              onChange={(e) => props.setCity(e.target.value)}
            />
            {props.error ? (
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
              onClick={props.onClick}
            >
              Criar conta
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
