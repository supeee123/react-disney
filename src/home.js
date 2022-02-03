import Comp1 from "./comp";
import Carousel1 from "./component";
import Kids from "./kidshow";
import Popmov from "./popmov";
import Popshow from "./popularshow";
import Comp3 from "./videos";
import Foot1 from "./footer";
import Foot2 from "./footer2";
import Watch from "./watch"
import { useState } from "react";

const Home = () => {
   let[cartitem,setcartitem]=useState([]);
   const handleadd=(movie)=>{
      const prodexist=cartitem.find((item)=>item.id===movie.id);
      if(prodexist){
         setcartitem(cartitem.map((item)=>item.id===movie.id?{...prodexist}:item));
      }
      else{
         setcartitem([...cartitem,{...movie}])
      }
   }
    return ( 
        <div className="homepage">
            <Comp1 />
             <div className="carousels">
                <Carousel1 />
                 </div> 
                 <div className="k1">
                      <Watch cartlist={cartitem}  />
                      </div>   
               <div className="showpop">
                <Popshow handleaddlist={handleadd} />
                 </div>  
                <div className="movpop"> 
                     <Popmov handleaddlist={handleadd} /> 
                </div>
                <div className="v1">
                   <Comp3 />
                   </div>     
                   <div className="k1">
                      <Kids handleaddlist={handleadd}/>
                      </div>    
                      <div className="k1">
                      <Foot1 />
                      </div>   
                      <div className="k1">
                      <Foot2 />
                      </div>  
                      <div>

                         </div> 

        </div>
     );
}
 
export default Home;