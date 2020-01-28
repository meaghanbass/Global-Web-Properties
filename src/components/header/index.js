import React from 'react';
// import Navbar from './navbar';

class Header extends React.Component {
    render(){

        const btnToggle = () => {
            var element = document.getElementById("theme");
            var toggler = document.getElementById("toggleBtn");
            element.classList.toggle("dark");
            toggler.classList.toggle("on");
        };

        return (
            <React.Fragment>
                <header>
                    <div class="container">
                        {/* <Navbar /> */}
                        <div className="site_info_title">
                            <p>Site Title</p>
                        </div>
                        {/* <button id="toggleBtn" onClick={btnToggle}>
                            Toggle Theme
                        </button> */}
                        <button id="toggleBtn" className="off" onClick={btnToggle}>
                            <span id="toggleCl"></span>
                        </button>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;