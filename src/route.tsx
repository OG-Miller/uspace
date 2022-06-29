export const Route = (props: { path: string, children: JSX.Element }): JSX.Element => {
      let params = new URLSearchParams(document.location.search);
      let page = params.get('page')
   return page === props.path ? props.children : null; 

}
