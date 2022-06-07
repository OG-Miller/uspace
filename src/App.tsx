import * as React from "react";
import styled from "styled-components";
import {Header} from "./Header";
import {Toolbar} from "./Toolbar";
import {Main} from "./Main";

export interface AppProps {
}

export const App = () => (
  <AppWrapper>
       <ToolbarWrapper>
           <Toolbar/> 
       </ToolbarWrapper>
       <HeaderWrapper>
           <Header/> 
       </HeaderWrapper>
       <MainWrapper>
           <Main/> 
       </MainWrapper>
  </AppWrapper>
);

const AppWrapper = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
   
    grid-template-areas: 
     "header"
     "main" ;


 @media (min-width: 570px) {  
    grid-template-areas: 
     ". header header header ." 
    ". toolbar main main .";
    ". toolbar main main .";

    grid-template-columns: 1fr 2fr 3fr 3fr 1fr;
    grid-template-rows: 1fr 09fr;
  }

`
const HeaderWrapper = styled.div`
    grid-area: header;
    background-color: lightblue;
    border: 1px solid black;
    border-bottom: 0px;

`
const ToolbarWrapper = styled.div`
    grid-area: toolbar;
    display:none;
    background-color: gray;
    border: 1px solid black;
    border-right: 0px;

 @media (min-width: 570px) {  
   display: grid; 
  }



`
const MainWrapper = styled.div`
    grid-area: main;
    background-color: lightgreen;
    border: 1px solid black;
`


