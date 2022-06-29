import * as React from "react";
import styled from 'styled-components';
import { Info } from "./info";
import { Search}  from "./search";
import { Home } from "./home";
import { Route} from "./route";


// routing logic
//const Route = (props: { path: string, children: JSX.Element }): JSX.Element => {
//    console.log('pathname' , window.location.pathname);
//    console.log("href" , window.location.href);
//    return window.location.pathname === props.path ? props.children : null
//
//
//}

console.log(window.location.pathname);

export const Main = () => (
    <Wrapper>
        <Route path="/Home">
            <Home />
        </Route>
        <Route path="Search">
            <Search />
        </Route>
        <Route path="Info">
            <Info />
        </Route>
    </Wrapper>
);

const Wrapper = styled.div`
  font-family: var(--app-font); 
  font-size: 20px;
  line-height: 1.6;
  padding: 40px;
`
