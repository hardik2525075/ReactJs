import styled from "styled-components";
import{Link as LinkS} from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
    background : #1031AD;
    height:80px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;
    box-shadow: 0px 0px 10px 1px #1031AD;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer =styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;
`;

export const NavItem = styled.li`
  height: 40px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.4rem; 
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 8px 20px;
  color: #010606;
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #15cdfc;
    text-decoration: none;
  }
`;