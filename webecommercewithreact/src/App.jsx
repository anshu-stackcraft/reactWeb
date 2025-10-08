import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Store from "./components/Store";
import Slider from "./components/Slider";



const App = () => {

    return (
        <>
        <Nav /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/phone" element={<Slider />} />

            </Routes>
        <Footer />
        </>
    )
}

export default App;