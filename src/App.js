import React,{ useState } from 'react';
import './App.css';
import Card from './Components/Common/card';
import Box from './Components/Common/box';
import DarkMode from './Components/DarkMode';
import Image1 from './Components/assets/images/icon-down.svg';
import Image2 from './Components/assets/images/icon-facebook.svg';
import Image3 from './Components/assets/images/icon-instagram.svg';
import Image4 from './Components/assets/images/icon-twitter.svg';
import Image5 from './Components/assets/images/icon-up.svg';
import Image6 from './Components/assets/images/icon-youtube.svg';
import Switch from '@mui/material/Switch';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") &&  localStorage.getItem("theme")=== "dark" ? true : false)

  const handleChange = () => {
    if(darkMode) {
      setDarkMode(false)
      localStorage.setItem("theme", "light");
    }
    else{
      setDarkMode(true)
      localStorage.setItem("theme", "dark");
    }
  }
  
  return (
    <div className={`Container ${darkMode ? "dark-bg" : "light-bg"}`}>
      <div className={`pcard-container ${!darkMode ? "pcard-light-bg" : "pcard-dark-bg"}`}>
        <div className={`heading ${darkMode ? "text-light" : "text-dark"}`}>
          <span>Social Media Dashboard</span>
          <span className="header">Total Followers: 23,004</span>
          <Switch checked={darkMode} onChange={handleChange} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%" }}>
          <Card image={Image2}
            label="@nathanf"
            text="1987"
            classes={`card1 ${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera="F O L L O W E R S"
            pera1="12 Today" />
          <Card image={Image4}
            label="@nathanf"
            text="1044"
            classes={`card2 ${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera="F O L L O W E R S"
            pera1="99 Today" />
          <Card image={Image3}
            label="@realnathanf"
            text="11k"
            classes={`card3 ${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera="F O L L O W E R S"
            pera1="1099 Today" />
          <Card image={Image6}
            label="nathan F."
            text="8239"
            classes={`card4 ${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera="F O L L O W E R S"
            pera1="144 Today" />
        </div>
        <div className={`heading1 ${darkMode ? "text-light" : "text-dark"}`}>
          Overview - Today
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%" }}>
          <Box
            page5="Page Views"
            image1={Image2}
            text3="87"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="3%"
          />
          <Box
            page5="Likes"
            image1={Image2}
            text3="52"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="2%"
          />
          <Box
            page5="Likes"
            image1={Image3}
            text3="5462"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="2257%"
          />
          <Box
            page5="Profile Views"
            image1={Image3}
            text3="52k"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="1357%"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%"}}>
          <Box
            page5="Retweets"
            image1={Image4}
            text3="117"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="303%"
          />
          <Box
            page5="Likes"
            image1={Image4}
            text3="507"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="553%"
          />
          <Box
            page5="Likes"
            image1={Image6}
            text3="107"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="19%"
          />
          <Box
            page5="Total Views"
            image1={Image6}
            text3="1407"
            classes1={`${darkMode ? "card-dark-bg" : "card-light-bg"}`}
            pera2="12%"
          />
        </div>
      </div>
    </div>
  );
}


export default App;
