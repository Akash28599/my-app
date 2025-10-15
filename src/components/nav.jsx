import '../App.css';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaLinkedin } from "react-icons/fa"; 
import { useState} from 'react';

function Nav(){
   const [show, setShow] = useState(null);
   
     const icons = [
       { label: "Home", component: FaHome },
       { label: "About", component: FaUser },
       { label: "Projects", component: FaFolderOpen },
       { label: "Contact", component: FaEnvelope },
       { label: "LinkedIn", component: FaLinkedin }
     ];
   const handleIcon=(label)=>{
    let link=label
    let target=document.getElementById(label)
    if(link=="LinkedIn"){
      window.open("https://www.linkedin.com/in/akash-k-6b0510203/")
    }

     if(target){
 target.scrollIntoView({
        behavior:"smooth",
        block:"start"
       })
     }  
   }
     return (
       <>
         <div
           className="Nav"
           /* inline style OK, but main layout is in CSS below */
          style={{
    width: "240px",
    height: "40px",
    borderRadius: "15px",
    border: "0.5px solid gray",
    position: "fixed",
    top: "10px",          // distance from top
    left: "50%",          // move left edge to center
    zIndex: 1000,         // stay on top
  }}
         >
           {icons.map((iconElement) => {
             const Icon = iconElement.component;
             return (
               <div
                 key={iconElement.label}
                 className="iconWrap"
                 onMouseEnter={() => setShow(iconElement.label)}
                 onMouseLeave={() => setShow(null)}
               >
                 <Icon className="tool"  onClick={()=>handleIcon(iconElement.label)}/>
                 {show === iconElement.label && (
                   <div className="tooltip">{iconElement.label}</div>
                 )}
               </div>
             )
           })}
         </div>
   
         {/* filler content to allow scrolling */}
        
       </>
     );
}

export default Nav;