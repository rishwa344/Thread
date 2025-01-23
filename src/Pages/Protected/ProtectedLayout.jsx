import { Outlet } from "react-router-dom";
import {Stack, useMediaQuery} from "@mui/material";
import Header from "../../components/common/Header.jsx";
import AddPost from "../../components/models/AddPost.jsx";
import EditProfile from "../../components/models/EditProfile.jsx";
import MainMenu from "../../components/menu/MainMenu.jsx";

const ProtectedLayout = () => {
    const _700 = useMediaQuery("(min-width:700px)");
    return (
        <Stack
            flexDirection="column"
            maxWidth={_700 ? "800px" : "90%"}
            minWidth="100%"
            mx="auto"
            overflow="hidden"
        >
            <Header /> {/* Header appears on all pages */}
            {/*<AddPost />*/}
            {/*<EditProfile />*/}
            <MainMenu />
            <Outlet /> {/* Child routes (Home, Search, etc.) render here */}
        </Stack>
    );
};

export default ProtectedLayout;
