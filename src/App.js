
import Log from "./login";
import Navb from "./navbar";
import Home from "./home";
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Eror from "./error";



function App() {
 
  return (
    <Router>
    <div className="App">
      <Navb />
     <div className="content">
       <Switch> 
          <Route exact path="/">
         <Home />
         </Route> 
          <Route exact path ="/log">
           <Log />
         </Route> 
         <Route path ="*">
           <Eror />
         </Route> 
        

        </Switch>

     </div>
    </div>
    </Router>
  );
}

export default App;
