import Navbar from "./Navbar";
import { useState } from "react";

function Home(){
    const [open,setOpen]= useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Navbar toggle={toggle}/>
        </>
    );
}

export default Home;