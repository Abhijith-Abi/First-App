import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

function Navbar() {
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
    justify-content: flex-start;
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
