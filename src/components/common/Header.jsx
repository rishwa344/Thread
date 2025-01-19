import {Stack} from "@mui/material";
import Navbar from "./Navbar.jsx";
import { TbMenu2 } from "react-icons/tb";

const Header = () =>{
    return(
        <>
            <Stack
            flexDirection={"row"}
            height={52}
            justifyContent={"space-around"}
            alignItems={'center'}
            position={'sticky'}
            top={0}
            py={1}
            >
            <img src="/Threads-logo-black-bg.webp" alt="logo" width={60} height={48} />
            <Stack justifyContent={"center"} width={"550px"} zIndex={2} height={96} bgcolor={"aliceblue"}
            >
            <Navbar />
            </Stack>
                <p>
                    <TbMenu2 size={36} className="image-icon" />
                </p>
            </Stack>
        </>
    );
};
export default Header;