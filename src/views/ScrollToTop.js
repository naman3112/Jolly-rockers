import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToTop(props) {

   let scroll= 0;
   if(props.scroll==='top'){
       scroll=parseInt(0);
   } else{
       scroll=document.body.scrollHeight;
   }
   const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0,scroll );
    }, [pathname]);
  
    return null;
  }