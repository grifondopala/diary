import React from 'react';
import './App.css';
import {MainPage} from "./Pages/MainPage/tsx/MainPage";

function App() {

    const [chosenPage, setChosenPage] = React.useState('mainPage')

    return (
        <div>
            <div id={'leftNavbar'}>
                <div id={'leftNavbarDiv'}>
                    <div className={chosenPage === 'homePage' ? 'leftNavbarBtnDiv activate' : 'leftNavbarBtnDiv'}>
                        <img className={'leftNavbarIcon'} src={'/images/homeIcon.png'} />
                        <label className={'leftNavbarLabel'}>Домой</label>
                    </div>
                    <div className={chosenPage === 'mainPage' ? 'leftNavbarBtnDiv activate' : 'leftNavbarBtnDiv'}>
                        <img className={'leftNavbarIcon'} src={'/images/calendarIcon.png'} />
                        <label className={'leftNavbarLabel'}>Календарь</label>
                    </div>
                </div>
            </div>
            <div id={'topNavbar'}>

            </div>
            <div id={'contentDiv'}>
                {chosenPage === 'mainPage' && (<MainPage/>)}
            </div>
        </div>
    );
}

export default App;
