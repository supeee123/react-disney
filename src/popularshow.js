

// import Watched from "./watchlist"

const Popshow = (props) => {
   let handleadd=props.handleaddlist;
    let blog=[
        {path:"assset/aladdin.jpg" ,text:"Add to watchlist",id:1},
        {path:"assset/avengers.jpg" ,text:"Add to watchlist",id:2},
        {path:"assset/chichore.jpg" ,text:"Add to watchlist",id:3},
        {path:"assset/dil bechara.jpg" ,text:"Add to watchlist",id:4},
        {path:"assset/sangchi.jpg" ,text:"Add to watchlist",id:5},
        {path:"assset/mulan.jpg" ,text:"Add to watchlist",id:6}
    ]

    
    return ( 
        <div className="app">
        <h1 style={{color:"white",fontSize:"25px",marginLeft:"10px"}}>Popular movies</h1>
        <div className="movies">
            {blog.map((e)=>(
                <div className="mov1">
                    <img src={e.path} alt="pic" style={{height:"200px",width:"200px"}}/>
                    <button id="butn" onClick={()=>handleadd(e)}>{e.text}</button>
                </div>
            ))}
            
        </div>
        
       </div>
     );
}
 
export default Popshow;