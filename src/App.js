import react,{Component} from "react"
import SingleColorPalette from "./SingleColorPalette";

import PaletteList from "./PaletteList";
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Switch,Route } from "react-router-dom";

class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id===id;
    });
  }
  render(){
  return (
    <Switch>
      <Route 
      exact 
      path='/'
      render={(routeProps)=><PaletteList palettes={seedColors} {...routeProps}/>}/>
  <Route exact path='/' render={()=> <h1>PALETTE LIST GOES HERE</h1>}/>
<Route
exact
path="/palette/:id"
render={routeProps =>(
  <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
)}/>
<Route exact path="/palette/:paletteId/:colorId" render={routeProps =>(
  <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>)}/>
    </Switch>
  );
}
}

export default App;
