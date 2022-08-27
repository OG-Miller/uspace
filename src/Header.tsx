
import * as React from "react";
import styled from 'styled-components';

export const Header = () => {
    console.log("header log");

    return (
        <Wrapper>
            <Text>
                <h1>Hi</h1>
            </Text>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  color: black;
  font-family: var(--app-font); 
  padding: 40px;
`

const Text = styled.div`
  font-family: 'Spectral', serif;
`
