import {Stack, Typography} from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
const PostTwo = () => {
    return (
        <>
            <Stack flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack flexDirection={"column"} gap={2}>
                    <Stack flexDirection={"column"}>
                        <Typography variant={"h6"} fontSize={"1rem"} fontWeight={"bold"}>Rishwa Patel</Typography>
                        <Typography variant={"h5"} fontSize={"1.2rem"} >Hi guys this is the caption</Typography>
                    </Stack>
                <img src="/error-bg.png" alt="" loading={"lazy"} height={"auto"} width={"400px"}/>
                </Stack>
                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} gap={2}>
                        <FaRegHeart size={32} />
                        <FaRegComment size={32} />
                        <FaRetweet size={32} />
                        <IoMdSend size={32} />
                    </Stack>
                    <Stack flexDirection={"row"} gap={1} position={"relative"} top={-3} left={4}>
                        <Typography variant={"caption"} color={"GrayText"} fontSize={'1.1rem'}>2 Likes .</Typography>
                        <Typography variant={"caption"} color={"GrayText"} fontSize={'1.1rem'}>1 Comment</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
export default PostTwo;