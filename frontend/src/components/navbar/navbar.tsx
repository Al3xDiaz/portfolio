import React, { useState }  from "react";
import Menubutton from '../../svgs/menubutton.svg'
import {TreeRoutes} from '../../routes'
import {
  useHistory,
} from "react-router-dom";
interface NavBarProps{
    title:string,
    menuItems?:TreeRoutes[]
}
interface IStyles{
  navbar:React.CSSProperties,
  menubutton:React.CSSProperties,
  open:React.CSSProperties,
  close:React.CSSProperties,
  shadow:React.CSSProperties,
  navlink:React.CSSProperties,
}
function NavBar(props:NavBarProps) {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const closeOpen=()=>{
    setOpen(!open)    
  }
  const toPage=(url:string)=>{
    closeOpen()
    // history.pushState({},'',url)
    history.push(url)
    // history.go(0)
  }
  return (
    <div>
      {open?(
      <div>
          <div className="primary-color" style={styles.open}>
            <div style={{fontSize:28}}>Menu</div>
            {props.menuItems?.map((item,i)=>(
            <div
            key={i}
            onClick={()=>toPage(item.path)}
            style={styles.navlink}
            >
              {item.icon}
              <a style={{marginLeft:'1vw'}} className="white" >{item.name}</a>
            </div>
            ))}
          </div>
          <div onClick={closeOpen}  style={styles.shadow}></div>
        </div>
      ):(<div style={styles.close}></div>)}
      
    <div className="Home primary-color" style={styles.navbar}>
      <div onClick={closeOpen} style={{margin:'1vh'}}>
        <img style={styles.menubutton} src={Menubutton} alt="icon" />
      </div>
      <div style={{margin:'1vh',fontSize:28}}>{props.title}</div>
    </div>
    </div>
  );
}
const styles:IStyles = {
    navbar:{
        color:'#fff',
        padding:'2vh',
        display:'flex',
        alignItems:'center',
    },
    menubutton:{
        width:"2.8vw",
        height:"3.5vh",
        cursor:'pointer'
    },
    open:{
      height:'100vh',
      width:'25vw',
      position: 'absolute',
    },
    close:{
        visibility:'hidden',
        top: '-30vw',
    },
    shadow:{
        height:'100vh',
        width:'75vw',
        position: 'absolute',
        background:'#000',
        opacity:'25%',
        left:'25vw'
    },
    navlink:{
      fontSize:24,
      margin:'6%',
      display:'flex',
      cursor:'pointer'
    }
};
export default NavBar;