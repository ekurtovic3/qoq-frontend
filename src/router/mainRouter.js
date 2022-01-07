import { Routes, Route } from "react-router-dom";
import Home from './../Components/Home'
import Game from './../Components/Game'
export default function MainRouter(){
    return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
    )
}
