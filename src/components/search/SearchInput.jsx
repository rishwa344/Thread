import {InputAdornment, TextField} from "@mui/material";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
    return(
        <>
        <TextField sx={{
            width:'90%',
            maxWidth:'750px',
            boxShadow: '5px 5px 5px gray',
            borderRadius: "15px",
            px: 2,
            py: 1,
            my: 5,
            mx: "auto",
            '& .MuiOutlineInput-root':{
                color:'black',
                "& fieldset":{
                    border:"none",
                },
            },
        }}
        placeholder="search" inputProps={{
            startAdornment:(
                <InputAdornment position={"start"} sx={{
                    color:"black"
                }} >
                    <FaSearch />
                </InputAdornment>
            )
        }}
        />
        </>
    )
}
export default SearchInput;