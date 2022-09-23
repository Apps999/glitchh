import "./serchDropitem.css"
import pic from "./../../assets/images/otherPic.png"

const SearchDropDownItem = (props) => {
    const username = "MickyPorterico#2213"
    const RealName = "Michael Perraro"
    return (
        
            <div className="row" style={{marginLeft: 0, marginRight:0}}>
                <div className="col-1 serImg">
                    <img src={pic} alt="" />
                </div>
                <div className="col-10 SContent">


                    <h6 className="SUserName">{username}</h6>


                    <p className="SRealName">{RealName}</p>

                </div>
                <div className="col-1">
                    <button  className={(props.active=="true") ? "Follow FollowButton" : "edit FollowButton"} style={{border:"none"}}>Following</button>
                </div>
                <hr style={{width: "98%", marginLeft:"auto",marginRight:"auto"}} />
            </div>
        
    );
}

export default SearchDropDownItem;