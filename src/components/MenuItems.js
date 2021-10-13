import React from 'react'

    const MenuItems = () => {
        const menuItemsWord = ['首頁','常見問題','技術支援','聯絡客服'];
        const itemsIcon = ['home','question circle','wrench','envelope'];
      
        const itemResult = menuItemsWord.map((item, index) => {  
            const iconPresent = 'icon ' + itemsIcon[index];
            return(
                <div className="menu">                
                    <a className="item" key={index}>
                        <i className={iconPresent}></i>
                        {item}
                    </a>
                </div>
            )
        });
        return itemResult
    }

    export default MenuItems;