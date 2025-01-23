import {Stack, useMediaQuery} from "@mui/material";
import { TbHomeFilled } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";

const Navbar = () =>{

    const _300 = useMediaQuery("(min-width:300px)");

    return(
        <>
        <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignContent={'center'}
        >
            <FiArrowLeft size={_300?"32":"24"} className="image-icon" color="black" />
            <Link to={'/'} className="link">
                <TbHomeFilled size={_300?"32":"24"} />
            </Link>
            <Link to={"/search"} className="link" color="black">
            <TbSearch size={_300?"32":"24"}   />
            </Link>
            <TbEdit size={_300?"32":"24"} className="image-icon" color="black"  />
            <TbHeart size={_300?"32":"24"} className="image-icon" color="black" />
            <Link to={'/profile/threads/1'} className="link">
                <BsPersonCircle size={_300?"32":"24"} color="black" />
            </Link>

        </Stack>
        </>
    )
}

export default Navbar;