import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import AlbumDetails from "./components/AlbumDetails";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album/:id' element={<AlbumDetails />} />
        <Route path='/about' element={<div>About</div>}/>
      </Routes>
    </BrowserRouter>
  );
}