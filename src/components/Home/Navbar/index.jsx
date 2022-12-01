import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    Nav,
    Div,
    NavbarContainer,
    NavMenu,
    NavItem,
    NavBtn,
    NavLinks,
    Button,

  } from "./Navbar";

const Navbar = ({toggle}) =>{
    const navigate = useNavigate();

    function removeUserData(e) {
        e.preventDefault();
        localStorage.clear();
        navigate("/");
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Div>
                        <Link to="/home">
                        </Link>
                    </Div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <Button onClick={removeUserData}>Logout</Button>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;