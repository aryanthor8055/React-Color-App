import React from "react";
import { withStyles } from "@mui/styles";

const styles={
root:{
backgroundColor:"white",
border:"1px solid black",
borderRadius:"5px",
padding:"0.5rem",
position:"relative",
overflow:"hidden",
"& hover":{
    cursor:"pointer"
}
},
colors:{
backgroundColor:"#dea1e4",
height:"150px",
width:"100%",
borderRadius:"5px",
overflow:"hidden"
},
title:{
display:"flex",
justifyContent:"space-between",
alignItems: "center",
margin:"0",
alignItems:"center",
color:"black",
paddingTop:"0.2rem",
paddingBottom:"0.3rem",
fontSize:"1rem",
position:"relative"
},
emoji:{
marginLeft:"0.5rem",
fontSize:"1.5rem"
},

miniColor:{
    height:"25%",
    width:"20%",
    display:"inline-block",
    margin:"0 auto",
    position:"relative",
    marginBottom:"-3.5px"
}
};

function MiniPalette(props){
    const {classes,paletteName,emoji,colors}=props;
    const minicolorBoxes=colors.map(color=>(
        <div className={classes.miniColor} 
        style={{backgroundColor:color.color}} 
        key={color.name}>

        </div>
    ))
    return(
        <div className={classes.root} onClick={props.handleClick}>
         <div className={classes.colors}>
            {minicolorBoxes}
         </div>
         <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles) (MiniPalette);