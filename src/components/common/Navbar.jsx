import {Stack} from "@mui/material";
import { TbHomeFilled } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignContent={'center'}
        >
            <Link to={'/'}>
                <TbHomeFilled size={32} />
            </Link>
            <Link to={"/search"} >
            <TbSearch size={32}  />
            </Link>
            <TbEdit size={32}  />
            <TbHeart size={32}  />
            <Link to={'/profile/threads/1'}>
                <BsPersonCircle size={32} />
            </Link>

        </Stack>
        </>
    )
}

export default Navbar;