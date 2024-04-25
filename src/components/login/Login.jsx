import { useState } from "react";
import React from "react";
import { TextField, Button, Grid, Typography, Alert } from "@mui/material";


const Login = () => {

    const [register, setRegister] = useState('');

    const handleChange = (event) => {
        setRegister(event.target.value)
    }

    const validate = () => {
        if (register.toLowerCase().includes("o") || register == ('')) {
            return window.alert("Usuario inválido para registrarse")
        }
        window.alert("¡Usuario registrado correctamente!")
        setRegister('')

    }

    return (
        <Grid container direction="column" spacing={2} sx={{ p: 5, mt: 5, backgroundColor: '#BFBBBB', borderRadius: 5, width: '406px', height: '300px'}}>
            <Grid item>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    value={register}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                {
                    register.toLowerCase().includes("o") && (
                        <Typography sx={{color: 'red', fontSize: '15px'}}>Por favor, ¡Nombres de usuario sin la letra <b>o</b>!</Typography>
                    )
                }
            </Grid>
            <Grid item>
                {
                    register && (
                        <p><b>Username ingresado: </b>{register}</p>
                    )
                }
            </Grid>
            <Grid item>
                <Button onClick={validate} variant="contained" sx={{ backgroundColor: '#15202bff'}}>Registrar</Button>
            </Grid>
        </Grid>


    );
};


export default Login