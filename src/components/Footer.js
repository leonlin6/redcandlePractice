import React from 'react';


const Footer = (props) => {
    
    return (
        <div className="menu-background-color">
            <div className="footContainer">
                <div style={{paddingTop: '32px', paddingBottom: '16px'}}>
                    <img style={{width: '228px', height: '55px'}} src="./images/redcandle-full.svg"></img>
                </div>
                <div className="footerMaps" style={{ marginRight:'auto', marginLeft:'auto', color:'rgb(235, 166, 181)', padding:'24px'}}>
                    <div className="two wide column">隱私權政策</div>
                    <div className="two wide column">|</div>
                    <div className="two wide column">使用者協議</div>
                    <div className="two wide column">|</div>
                    <div className="two wide column">銷售條款</div>
                    <div className="two wide column">|</div>
                    <div className="two wide column">常見問題</div>
                </div>
                <p style={{paddingBottom:'20px' ,color:'rgb(235, 166, 181)'}}>© 2021 by RED CANDLE GAMES CO.,LTD. 赤燭股份有限公司 All rights reserved.</p>
            </div>
            
        </div>
    )
    
}
    


export default Footer;
