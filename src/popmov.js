const Popmov = (props) => {
    let handleadd1=props.handleaddlist;
    let shows=[
        {path:"assset/anupama.jpg" ,text:"Add to watchlist",id:7},
        {path:"assset/radha.jpg" ,text:"Add to watchlist",id:8},
        {path:"assset/yerishta.jpg" ,text:"Add to watchlist",id:10},
        {path:"assset/sath.jpg" ,text:"Add to watchlist",id:11},
        {path:"assset/img.jpg" ,text:"Add to watchlist",id:12},
        {path:"assset/mehndi.jpg" ,text:"Add to watchlist",id:13}
    ]
    return (
        <div className="app">
        <h1 style={{color:"white",fontSize:"25px",marginLeft:"10px"}}>Popular tv shows</h1>
         <div className="movies">
            {shows.map((e)=>(
                <div className="mov1">
                    <img src={e.path} alt="pic" style={{height:"200px",width:"200px"}}/>
                    <button id="butn"onClick={()=>handleadd1(e)}>{e.text}</button>
                </div>
            ))}
            
        </div>
        </div>
      );
}
 
export default Popmov;