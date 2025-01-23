import Loading from "./components/common/Loading.jsx";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Home from "./Pages/Protected/Home.jsx";
import Search from "./Pages/Protected/Search.jsx";
import User from "./Pages/Protected/User.jsx";
import Error from "./Pages/Error.jsx";
import Register from "./Pages/Register.jsx";
import {Box} from "@mui/material";
import ProtectedLayout from "./Pages/Protected/ProtectedLayout.jsx";
import ProfileLayout from "./Pages/Protected/profile/ProfileLayout.jsx";
import Threads from "./Pages/Protected/profile/Threads.jsx";
import Replies from "./Pages/Protected/profile/Replies.jsx";
import Repost from "./Pages/Protected/profile/Repost.jsx";
import SinglePost from "./Pages/Protected/profile/SinglePost.jsx";

function App() {
    const data = true;
    return (
        <BrowserRouter>
            <Routes>
                {
                    data ?  <Route path="/" element={<ProtectedLayout />}>
                        <Route index element={<Home />} />
                        <Route exact path="search" element={<Search />} />
                        <Route exact path="post/:id" element={<SinglePost />} />
                        <Route exact path="profile" element={<ProfileLayout />}>
                            <Route exact path="threads/:id" element={<Threads />}/>
                            <Route exact path="replies/:id" element={<Replies />}/>
                            <Route exact path="reposts/:id" element={<Repost />}/>
                        </Route>
                        </Route>
                        :
                        <Route exact path="/" element={<Register />} />
                }
                <Route exact path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;