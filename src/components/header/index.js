import React from 'react';
// import Navbar from './navbar';

class Header extends React.Component {
    render(){

        const btnToggle = () => {
            var element = document.getElementById("theme");
            element.classList.toggle("dark");
        };

        return (
            <React.Fragment>
                <header>
                    <div class="container">
                        {/* <Navbar /> */}
                        <div className="site_info_title">
                            <p>Site Title</p>
                        </div>
                        <button id="toggleBtn" onClick={btnToggle}>
                            Toggle Theme
                        </button>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;