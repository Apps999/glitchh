import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import  MyProfile  from "./components/myProfile/MyProfile";
import OtherProfile from "./components/otherProfile/OtherProfile"
import SettingsSidebar from './components/Settings/SettingsSidebar';
import EditProfile from './components/Settings/EditProfile/EditProfile';
import ChangePassword from './components/Settings/ChangePassword/ChangePassword';
import HelpSupport from './components/Settings/HelpSupport/HelpSupport';
import NotificationFinal from './components/Notification/notifiFin';
import SearchDropDownItem from './components/SearchDropdown/serchDropitem';
import SearchDropDown from './components/SearchDropdown/searchDrop';
function App() {
  return (
    <div className="App">
      {/* <MyProfile /> */}
      {/* <OtherProfile /> */}
  
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="others" element={<OtherProfile />} />
        <Route path="settingside" element={<SettingsSidebar />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="help" element={<HelpSupport />} />
        <Route path="noti" element={<NotificationFinal />} />
        <Route path="ser" element={<SearchDropDown />} />

      </Routes>
    </div>
  );
}

export default App;
