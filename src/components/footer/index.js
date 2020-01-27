import React from 'react';
import './styles.scss';

class Footer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <footer>
                    <div className="top">
                        <div className="w-1/3">
                            w-1/3
                        </div>
                        <div className="w-2/3">
                            w-2/3
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="w-1/3 left">
                            <p>&copy; 2020 flow-ui. All rights reserved.</p>
                        </div>
                        <div className="w-1/3 center">
                            <ul>
                                <li>Contact</li>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="w-1/3 right">
                            <ul>
                                <li>FB</li>
                                <li>TW</li>
                                <li>DR</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;