const Kids = (props) => {
let handleadd2=props.handleaddlist;
    let shows=[
        {path:"assset/frozen.jpg" ,text:"Add to watchlist",id:1},
        {path:"assset/lion.jpg" ,text:"Add to watchlist",id:2},
        {path:"assset/tangled.jpg" ,text:"Add to watchlist",id:3},
        {path:"assset/doraemon.jpg" ,text:"Add to watchlist",id:4},
        {path:"assset/bajrangi.jpg" ,text:"Add to watchlist",id:5},
        {path:"assset/onward.jpg" ,text:"Add to watchlist",id:6}
    ]
    return (
        <div className="app">
         <h1 style={{color:"white",fontSize:"25px",marginLeft:"10px"}}>Popular kid shows</h1>
         <div className="movies">
            {shows.map((e)=>(
                <div className="mov1">
                    <img src={e.path} alt="pic" style={{height:"200px",width:"200px"}}/>
                    <button id="butn" onClick={()=>handleadd2(e)}>{e.text}</button>
                </div>
            ))}
            
        </div>
        </div>
      );
}
 
export default Kids;