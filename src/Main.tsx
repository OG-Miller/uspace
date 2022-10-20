import * as React from "react";
import styled from 'styled-components';
//import { Button } from "./button";
import { RoutingContext } from "./routing-context";
import { Content } from "./content";

export const Main = () => {
    const routeState = React.useContext(RoutingContext);

    function loadComponent(label: string): JSX.Element {

        switch (label) {
            case "Home": {
                return <Content copy="This is the Home copy via 'Content' component"/>
            }
            case "Search": {
                return <Content copy="This is the Search copy via 'Content' component"/>
            }
            case "Info": {
                return <Content copy="This is the Info copy via 'Content' component"/>
            }
        }
    }

    const component = loadComponent(routeState.routeState);

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



