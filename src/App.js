import React from "react";
import { Article, Brand } from "./components";
import { Blog } from "./containers";
import { styled } from "styled-components";

function App() {
    return (
        <Main>
            <Article />
            <Brand />
            <Blog />
        </Main>
    );
}

export default App;

const Main = styled.div`
    padding: 20px;
`;
