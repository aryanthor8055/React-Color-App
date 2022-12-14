import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state={level:500,format:"hex"};
    this.changeLevel=this.changeLevel.bind(this);
    this.changeFormat=this.changeFormat.bind(this);
  }

  changeLevel(level){
this.setState({level})
  }
  changeFormat(val){
   this.setState({format:val});
  }
  render() {
    const {colors,paletteName,emoji,id}=this.props.palette;
    const {level,format}=this.state
    const colorBoxes=colors[level].map(color=>(
        <ColorBox background={color[format]} 
        name={color.name} 
        key={color.id} 
        moreUrl={`/palette/${id}/${color.id}`} 
        showingFullPalette={true}
        />
    ))
    return (
      <div className='Palette'>
       <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true}/>
   {/* Navbar Goes here */}
   <div className='Palette-colors'>
    {/* bunch of color boxes */}
        {colorBoxes}
   
   </div>
   <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default Palette;
