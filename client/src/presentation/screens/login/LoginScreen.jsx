import React, { useState, useEffect } from "react";
import "./index.css";
import Logo from "../../../assets/images/logo.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Axios from "axios";
import BasicModal from "../../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [profile, setProfile] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [validationErr, setValidationErr] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [full_name, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [city, setCity] = useState("");

  const handleValidation = () => {
    if (loginEmail === "admin" && loginPassword === "admin123") {
      return navigate("/profile/admin");
    }
    profile.map((profile) => {
      if (loginEmail === profile.email) {
        return navigate("/profile");
      } else {
        setValidationErr(true);
      }
    });
  };

  const handleCreateAccount = () => {
    Axios.post("http://localhost:3001/api/insert/register", {
      full_name: full_name,
      password: password,
      email: email,
      cpf: cpf,
      birthdate: birthdate,
      cellphone: cellphone,
      city: city,
    }).then(() => {
      alert("Logado com sucesso!");
    });
    if (
      full_name === "" &&
      password === "" &&
      email === "" &&
      cpf === "" &&
      birthdate === "" &&
      cellphone === "" &&
      city === ""
    ) {
      setError(true);
    } else {
      handleClose();
      setFullName("");
      setPassword("");
      setEmail("");
      setBirthdate("");
      setCellphone("");
      setCity("");
      setCpf("");
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/register").then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <div className={"main_container"}>
      <div className={"logo_container"}>
        <img src={Logo} alt={"Logo"} className={"img"} />
        <h3>Soluções inteligentes para uma cidade inteligente.</h3>
      </div>
      <div className={"login_container"}>
        <Stack alignItems={"center"} spacing={4} marginTop={"3rem"}>
          <TextField
            id="outlined-error-1"
            label="Entre com o seu e-mail"
            size="medium"
            sx={{ width: "70%" }}
            name={"email"}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-error-2"
            label="Entre com sua senha"
            size="medium"
            type={"password"}
            sx={{ width: "70%" }}
            name={"password"}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <Stack alignItems={"center"} width={"35%"}>
            {validationErr ? (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "200",
                  marginBottom: "10px",
                }}
              >
                *Entre com um e-mail válido ou cadastre-se
              </span>
            ) : null}
            <Button
              id={"button1"}
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleValidation}
            >
              Iniciar Sessão
            </Button>
          </Stack>
        </Stack>
        <div className="hr" />
        <Stack alignItems={"center"} spacing={2} marginTop={"1.5rem"}>
          <BasicModal
            id={"button2"}
            onClick={handleCreateAccount}
            setFullName={setFullName}
            setEmail={setEmail}
            setBirthdate={setBirthdate}
            setCellphone={setCellphone}
            setCity={setCity}
            setCpf={setCpf}
            setPassword={setPassword}
            open={open}
            error={error}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </Stack>
      </div>
    </div>
  );
};

export default LoginScreen;
