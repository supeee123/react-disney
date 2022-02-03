const Comp1 = () => {
    let url=[
       {path:"assset/starp.jpg",id:1},
       {path:"assset/star2.jpg",id:2},
       {path:"assset/star3.jpg",id:3},
       {path:"assset/star4.jpg",id:4},
       {path:"assset/star5.jpg",id:5}
    ]
    return ( 
        <div className="channel">
       <div className="pop-show">
            {url.map((data)=>(
                <div className="pop-channel">
                    <img src={data.path} alt="pic" style={{height:"270px",width:"230px",borderRadius:"8px"}} />
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Comp1;