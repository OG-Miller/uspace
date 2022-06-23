
import * as React from "react";
import styled from 'styled-components';

export const Header = () => (
<Wrapper> 
    <Text>
        <h1>The uncarved block</h1>
    </Text>
</Wrapper> 
);

const Wrapper = styled.div`
  color: black;
  font-family: var(--app-font); 
  padding: 40px;
`

const Text = styled.div`
  font-family: 'Spectral', serif;
`
