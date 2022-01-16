import React from 'react';
import Menubutton from '../../svgs/menubutton.svg'
interface NavBarProps{
    title:string,
}
function NavBar(props:NavBarProps) {
  return (
    <div className="Home" style={styles.navbar}>
      <div style={{margin:'1vh'}}>
        <img style={styles.menubutton} src={Menubutton} alt="React Logo" />
      </div>
      <div style={{margin:'1vh',fontSize:28}}>{props.title}</div>
    </div>
  );
}
const styles = {
    navbar:{
        backgroundColor:'#07848F',
        color:'#fff',
        padding:'2vh',
        display:'flex',
        alignItems:'center',
    },
    menubutton:{
        width:"3vw",
        height:"3.5vh"
    }
};
export default NavBar;