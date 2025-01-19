import {Stack, TextField} from "@mui/material";
import Post from "../../../components/home/Post.jsx";
import Comments from "../../../components/home/post/Comments.jsx";
import {useState} from "react";

const SinglePost = () =>{

    const [comment, setComment] = useState('');

    return(
        <>
            <Stack flexDirection={"column"} my={5} gap={2}>
                <Post />
                <Stack flexDirection={"column"} width={"80%"} mx={"auto"} gap={2}>
                    <Comments />
                </Stack>
                <TextField id={"comment"} variant={"outlined"} autoFocus placeholder={"Comment here..."} sx={{
                    width: '50%',
                    mx:'auto',
                    my:5,
                    p:1
                }}
                           onChange={(e)=>setComment(e.target.value)}
                />
                </Stack>
        </>
    )
}
export default SinglePost;