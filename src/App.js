import React from "react";
import "./App.css";
import { Cta, Brand, Navbar } from "./components";
import {
    Blog,
    Footer,
    Features,
    Header,
    Possibility,
    WhatFirstApp,
} from "./containers";
import { styled } from "styled-components";

function App() {
    return (
        <MainContainer>
            <Container className="gradient__bg">
                <Navbar />
                <Header />
            </Container>
            <Brand />
            <WhatFirstApp />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </MainContainer>
    );
}

export default App;

const MainContainer = styled.div``;

const Container = styled.div``;
