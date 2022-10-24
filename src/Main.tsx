import * as React from "react";
import styled from 'styled-components';
//import { Button } from "./button";
import { RoutingContext } from "./routing-context";
import { Content } from "./content";

export const Main = () => {
    const routeContext = React.useContext(RoutingContext);

    function loadComponent(label: string): JSX.Element {

        switch (label) {
            case "Home": {
                return <Content copy="Home component"/>
            }
            case "Search": {
                return <Content copy="Search component"/>
            }
            case "Info": {
                return <Content copy="Info component"/>
            }
        }
    }

    const component = loadComponent(routeContext.routeState);
    console.log("hello", routeContext.routeState);

    return (
        <Wrapper>
            {component}
        </Wrapper>

    )
};

const Wrapper = styled.div`
  font-family: var(--app-font);
  font-size: 20px;
  line-height: 1.6;
  padding: 40px;
`



