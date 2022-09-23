import "./searchDrop.css"
import pic from "./../../assets/images/otherPic.png"
import SearchDropDownItem from "./serchDropitem";
import ViewAllButton from "./viewallButton";

const SearchDropDown = () => {

    return (
        <div className="card  searchDropCard">
           <SearchDropDownItem active= "true"/>
           <SearchDropDownItem active= "false"/>
           <SearchDropDownItem active= "false"/>
           <SearchDropDownItem active= "false"/>
           <SearchDropDownItem active= "false"/>
           <ViewAllButton />
        </div>
    );
}

export default SearchDropDown;