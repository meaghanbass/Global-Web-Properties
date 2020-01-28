import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <footer>
                    <div className="container">
                        <div className="top">
                            <div className="w-1/3 site_info_title">
                                <p>Site Title</p>
                            </div>
                            <div className="w-2/3 link-sections">
                                <div>
                                    <h3>Community</h3>
                                    <ul>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Submit an issue</a></li>
                                        <li><a href="/">GitHub Repo</a></li>
                                        <li><a href="/">Slack</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Getting Started</h3>
                                    <ul>
                                        <li><a href="/">Introduction</a></li>
                                        <li><a href="/">Documentation</a></li>
                                        <li><a href="/">Usage</a></li>
                                        <li><a href="/">Globals</a></li>
                                        <li><a href="/">Elements</a></li>
                                        <li><a href="/">Collections</a></li>
                                        <li><a href="/">Themes</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Resources</h3>
                                    <ul>
                                        <li><a href="/">API</a></li>
                                        <li><a href="/">Form Validations Product</a></li>
                                        <li><a href="/">Visibility</a></li>
                                        <li><a href="/">Accessibility</a></li>
                                        <li><a href="/">Community</a></li>
                                        <li><a href="/">Design Defined</a></li>
                                        <li><a href="/">Marketplace</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="w-1/3 left">
                                <p>&copy; 2020 flow-ui. All rights reserved.</p>
                                {/* <button id="jsbtn" onClick={btnToggle}>
                                    Toggle Theme
                                </button> */}
                            </div>
                            <div className="w-1/3 center">
                                <ul>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Terms of Service</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Sitemap</a></li>
                                </ul>
                            </div>
                            <div className="w-1/3 right">
                                <ul>
                                    <li><a href="/">FB</a></li>
                                    <li><a href="/">TW</a></li>
                                    <li><a href="/">DR</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;