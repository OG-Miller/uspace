
import * as React from "react";
import styled from 'styled-components';

export const Header = () => {

    return (
        <Wrapper>
            <Text>
                <h1>Header</h1>
            </Text>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  color: black;
  font-family: var(--app-font); 
  padding: 40px;
  justify-content: center;

`

const Text = styled.div`
  font-family: 'Spectral', serif;
`
