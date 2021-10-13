import React from 'react';
import MenuItems from './MenuItems'
import './App.css'

class Header extends React.Component{

    state = {dropMenu: 'none'}

    // languageDrop = languageDropWord.map((item, index) => {  

    //     return(
    //         <div>                

    //         </div>
    //     )
    // });

    switchDropMenu = () => {

        // const languageDropWord = ['繁體中文','简体中文','English','日本語','한국어'];

       if(this.state.dropMenu === 'block'){ 
           this.setState({dropMenu: 'none'})
       }    
       else{
            this.setState({dropMenu: 'block'})
        }
    }


    render(){ 
    
        return (
           
            <div style={{ position:'fixed',width:'100%', zIndex:'3',backgroundColor:'#c6173c'}}>
                <div className="ui secondary menu" >
                    <div className="item" >
                        <img src="../images/redcandle-logo.svg" alt="" style={{height:'38px'}}></img>
                    </div>
                    <div className="items-bar">
                        <MenuItems></MenuItems>         
                    </div>
                    <div className="right menu">
                        <div className="ui right dropdown item" onClick={this.switchDropMenu} >
                            <i className="globe icon"></i>
                            繁體中文
                            <div id="languageMenu" className="menu dropMenu-background-color" style={{display: this.state.dropMenu}}>
                                <div className="item"     
                                ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('color', 'white', 'important');
                                    }
                                    }}>简体中文</div>
                                <div className="item"     
                                ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('color', 'white', 'important');
                                    }
                                    }}>English</div>
                                <div className="item"     
                                ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('color', 'white', 'important');
                                    }
                                    }}>日本語</div>
                                <div className="item"     
                                ref={(el) => {
                                    if (el) {
                                        el.style.setProperty('color', 'white', 'important');
                                    }
                                    }}>한국어</div>
                            </div>
                        </div>
                        <div className="item">
                            <a key="001" className="item">
                                <i className="user circle icon"></i>
                                登入
                            </a>
                        </div>
                    </div>     
                </div>            
            </div>
            
        )
    }
}
    


export default Header;