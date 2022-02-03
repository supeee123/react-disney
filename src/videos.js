
const Comp3 = () => {
    let list = [
        { path: "assset/disneybl.png", id: 1 },
        { path: "assset/marvelbl.png", id: 2 },
        { path: "assset/starwarbl.png", id: 3 },
        { path: "assset/pixarbl.png", id: 4 },
        { path: "assset/nationalbl.png", id: 4 }
    ]
    return ( 
        <div className="videoapp">
            {list.map((e)=>(
                <div className="logo">
                    <img src={e.path} alt="pic" style={{height:"150px",width:"200px"}}/>
                </div>
            ))}
            
        </div>
        
     
     );
}
 
export default Comp3;