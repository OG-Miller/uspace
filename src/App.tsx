import * as React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Toolbar } from "./Toolbar";
import { Main } from "./Main";

export interface AppProps {
}

export const App = () => (
        <AppLayout>
            <ToolbarWrapper>
                <Toolbar />
            </ToolbarWrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <MainWrapper>
                <Main />
            </MainWrapper>
        </AppLayout>
);

//const AppWrapper= styled.div`
//    display: grid;
//    grid-template-columns: repeat(24, 1fr);
//`



const AppLayout = styled.div`

 --app-gray: #F9F7F7;
 --grid-gray: #B7B5B5;
 --app-font: 'Source Sans Pro', sans-serif;

    display: grid;
    width: 25fr;
    height: 100vh;
    background-color: var(--app-gray);
   
   grid-template-areas: 
     "header"
     "main";

    grid-template-rows: 1fr 09fr;
    grid-template-columns: 1fr;



 @media (min-width: 570px) {  
    grid-template-areas: 
     ". header header header ." 
    ". toolbar main main .";
    ". toolbar main main .";

    grid-template-columns: 1fr 3fr 5fr 5fr 1fr;
    grid-template-rows: 1fr 09fr;
  }

`
const HeaderWrapper = styled.div`
    grid-area: header;
    background-color: var(--app-gray);
    border: 1px solid var(--grid-gray);
    border-bottom: 0px;

`
const ToolbarWrapper = styled.div`
    grid-area: toolbar;
    display:none;
    background-color: var(--app-gray);
    border: 1px solid var(--grid-gray);
    border-right: 0px;
    padding-top: 30px;

 @media (min-width: 570px) {  
   display: grid; 
  }



`
const MainWrapper = styled.div`
    grid-area: main;
    background-color: var(--app-gray);
    border: 1px solid var(--grid-gray);

`


