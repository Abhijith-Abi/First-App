import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <MainContainer>
            <Container>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                </LogoContainer>
                <Section>
                    <List>
                        <Item>Home</Item>
                        <Item>What is GPT3?</Item>
                        <Item>Open AI</Item>
                        <Item>Case Studies</Item>
                        <Item>Library</Item>
                    </List>
                </Section>
                <SecontContainer>
                    <Sign>Sign in</Sign>
                    <Button>Sign up</Button>
                </SecontContainer>
                <MenuIcon className="gpt3__navbar-menu">
                    {toggleMenu ? <RiMenu3Line /> : <RiMenu3Line />}
                    {setToggleMenu && <RiCloseLine />}
                </MenuIcon>
            </Container>
        </MainContainer>
    );
}

export default Navbar;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    margin-right: 2rem;
    width: 62px;

    img {
        display: block;
        width: 100%;
    }
`;

const Section = styled.div``;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Item = styled.li`
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
`;

const SecontContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Sign = styled.p`
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    color: #fff;
    background: #ff4820;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
`;
const MenuIcon = styled.div`
    color: #fff;
`;
