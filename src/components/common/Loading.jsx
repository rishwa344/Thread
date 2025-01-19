import {Stack,CircularProgress} from "@mui/material"
import {green} from "@mui/material/colors";

const Loading = () =>{
    return(
        <Stack flexDirection={'row'} minHeight={'50vh'} width={'100%'} justifyContent={'center'} alignContent={'center'} my={5} >
            <CircularProgress color="success" />
        </Stack>
    )
}
export default Loading;