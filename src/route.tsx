//import {useCallback} from "react";


export const Route = (props: { path: string, children: JSX.Element }): JSX.Element => {
    
    let search = new URLSearchParams(document.location.search);
    let page = search.get('page')
    //console.log("log from inside Route:", window.location.href);
    return page === props.path ? props.children : null;
};
