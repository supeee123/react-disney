const Watch = (props) =>{
    let cartitem=props.cartlist;
 
    return (  
        <div className="watchlist-show">
            <div>
                {cartitem.length===0&&<div></div>}
                {cartitem.length>0&&<h1 id="hi">watchlist</h1>}
                {cartitem.map((item)=>(
                    <div id="shows">
                 <img id="w1"src={item.path} alt="pic" style={{height:"200px",width:"200px"}}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Watch;