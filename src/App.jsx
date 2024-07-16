import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndukProps from "./pages/Induk-Props";
import IndukImage from "./pages/IndukImage";
import Landing from "./pages/Landing";
import NotFound from "./pages/notfound";
import State from "./pages/State";
import EventHandling from "./pages/EventHandling";
import NonState from "./pages/NonState";
import UseEffect from "./pages/UseEffect";
import Animasi from "./componen/Animasi";
import FetchApi from "./componen/FetchApi";
import UpdateState from "./componen/UpdateState";
import ReactContext from "./pages/ReactContext";
import GetMahasiswa from "./componen/admin/GetMahasiswa";
import CreateMahasiswa from './componen/admin/CreateMahasiswa';
import Login from "./componen/auth/Login";
import NotLogin from "./componen/auth/NotLogin";
import Register from "./componen/auth/Register";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/landingpage" Component={Landing}/>
      <Route path="/indukprops" Component={IndukProps}/>
      <Route path="/indukimage" Component={IndukImage}/>
      <Route path="/state" Component={State}/>
      <Route path="/nonstate" Component={NonState}/>
      <Route path="/home" Component={Home}/>
      <Route path="/eventhandling" Component={EventHandling} />
      <Route path="/effect" Component={UseEffect} />
      <Route path="/fetchapi" Component={FetchApi} />
      <Route path="/animasi" Component={Animasi} />
      <Route path="/update" Component={UpdateState} />
      <Route path="/context" Component={ReactContext} />
      <Route path="/get" Component={GetMahasiswa} />
      <Route path="/insert" Component={CreateMahasiswa}/>
      <Route path="/login" Component={Login}/>
      <Route path="/notlogin" Component={NotLogin}/>
      <Route path="/register" Component={Register}/>


    </Routes>
    </>
   );
}



export default App;