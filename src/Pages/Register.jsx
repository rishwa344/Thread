import {Button, Stack, TextField, Typography, useMediaQuery} from "@mui/material";
import {useState} from "react";
const Register = () => {

    const _700 = useMediaQuery("(min-width:700px)");

    const [login, setLogin] = useState(false);
    const [username , setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleLogin = () => {
        setLogin((pre)=>!pre);
    };

    const handleRegister = () => {
        const data = {
            username,
            email,
            password
        };
        console.log(data);
    };
    const handleLogin = () => {
        const data = {
            email,
            password
        };
        console.log(data);
    };

    return (
        <>
    <Stack width={"100%"} height={"100vh"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}
    sx={_700 ? {
        backgroundImage: 'url("/register-bg.webp")',
        backgroundRepeat: 'no-repeat',
        backgroundSize:"100% 600px"
    }:null}
    >
        <Stack flexDirection={"column"} width={_700 ? "40%" : "90%"} gap={2} mt={_700 ? 20 : 0}>
            <Typography variant="h5" fontSize={_700 ? "1.5rem" : "1rem"} fontWeight={"bold"} alignSelf={"center"} >
                {login ? "Login with Email" : "Register with Email"}
            </Typography>
            {
                login ? null : <TextField
                    variant="outlined"
                    placeholder="Enter your Username..."
                    onChange={(e)=> setUsername(e.target.value)}
                />
            }
            <TextField variant="outlined" placeholder="Enter your Email..."  onChange={(e)=> setEmail(e.target.value)} />
            <TextField variant="outlined" placeholder="Enter your Password..."  onChange={(e)=> setPassword(e.target.value)} />
            <Button size="large" sx={{
                width:'100%',
                height:52,
                bgcolor:"green",
                color:"white",
                fontSize:"1rem",
                ":hover": {
                    bgcolor: "blue",
                    cursor: "pointer"
                }
            }}
            onClick={login ? handleLogin : handleRegister}
            >
                {
                    login ? "Login" : "Sign Up"
                }
            </Button>
            <Typography variant="subtitle2" fontSize={_700 ? '1.3rem' : "1rem"} alignSelf={'center'} >
                { login ? "Don't have an Account ?" : "Already Have an account?"}
                <span className="login-link" onClick={toggleLogin}>
                    {" "}
                    {login ? "Sign Up" : "Login"}
                </span>
            </Typography>
        </Stack>
    </Stack>
    </>
);
};

export default Register;