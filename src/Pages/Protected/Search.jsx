import SearchInput from "../../components/search/SearchInput.jsx";
import ProfileBar from "../../components/search/ProfileBar.jsx";
import {Stack} from "@mui/material";

const Search = () =>{
    return (
        <>
        <SearchInput />
            <Stack flexDirection={"column"} gap={1} mb={5} width={'90%'} mx={'auto'} maxWidth={'750px'}>
                <ProfileBar />
            </Stack>
        </>
    )
}

export default Search;