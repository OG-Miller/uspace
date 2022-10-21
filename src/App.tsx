import * as React from "react";
import styled from "styled-components";
import { Header } from "./header";
import { Toolbar } from "./toolbar";
import { Main } from "./main";
import { RoutingContext } from "./routing-context";

export interface AppProps {
}


export const App = () => {

    const [state, setState] = React.useState("home");
    //const GlobalState = React.useContext(RoutingContext);

    return (
        <RoutingContext.Provider value={{ routeState: state, setRouteState: setState }}>
            <AppWrapper>
                <AppLayout lightMode={true}>
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
            </AppWrapper>
        </RoutingContext.Provider>
    )
};

const AppWrapper = styled.div`
    display: 'grid',
    gridTemplateRows: '70vh',
    gridAutoRows: 'minmax(min-content, max-content)',
    gridTemplateColumns: 'repeat(24, 1fr)'
`


type Mode = {
    lightMode?: boolean;
}

const AppLayout = styled.div<Mode>`

 --light-background: #F9F7F7;
 --light-border: #B7B5B5;

 --dark-background: #322A2A;
 --dark-border: #F9F7F7;

 --background: ${props => props.lightMode ? `var(--light-background)` : `var(--dark-background)`};
 --border: 1px solid ${props => props.lightMode ? `var(--light-border)` : `var(--dark-border)`};


 --app-font: 'Source Sans Pro', sans-serif;

    display: grid;
    width: 24fr;
    height: 100vh;
    background-color: var(--background);
 
   
   grid-template-areas: 
     "header"
     "toolbar"
     "main";

    grid-template-rows: 1fr 1fr 9fr;
    grid-template-columns: 1fr;



 @media (min-width: 570px) {  
    grid-template-areas: 
     ". header header header ." 
    ". toolbar main main .";
    ". toolbar main main .";

    grid-template-rows: 1fr 09fr;
    grid-template-columns: 2fr 5fr 7fr 7fr 2fr;
  }

`
const HeaderWrapper = styled.div<Mode>`
    grid-area: header;
    background-color: var(--background);
    border: var(--border);
    border-bottom: 0px;

`
const ToolbarWrapper = styled.div<Mode>`
    grid-area: toolbar;
    display: flex;
    background-color: var(--background);
    border: var(--border);
    border-right: 0px;
    padding-top: 30px;

 @media (min-width: 570px) {  
   display: grid; 
   flex-direction: column;
  }

`
const MainWrapper = styled.div<Mode>`
    grid-area: main;
    background-color: var(--background);
    border: var(--border); 

`


