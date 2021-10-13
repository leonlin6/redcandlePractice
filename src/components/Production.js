import React from 'react';


const Production = (props) => {
    const productionStyle = {
        margin:'0', 
        maxWidth:'1000px', 
        paddingTop:'48px', 
        paddingRight:'24px', 
        paddingBottom:'24px', 
        paddingLeft:'24px',         
        marginRight:'auto', 
        marginLeft:'auto', 
        color:'white'

    }
    return (
        <div style={{backgroundColor:'#420814'}}>
            <div className='prdocutionItems'>
                <h2>組合包推薦</h2>
                <div class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production001.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">返校+還願 | 完整收藏包</div>
                            <div class="meta">
                                <a>返校 DETENTION 遊戲、返校 DETENTION 遊戲原聲帶、還願 DEVOTION 遊戲、還願 DEVOTION 遊戲原聲帶。</a>
                            </div>                        
                        </div>                        
                    </div>  
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production002.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">還願DEVOTION | 完整收藏包</div>
                            <div class="meta">
                                <a>還願 DEVOTION 遊戲、還願 DEVOTION 遊戲原聲帶。</a>
                            </div>                        
                        </div>                        
                    </div>  
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production003.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">返校DEVOTION | 完整收藏包</div>
                            <div class="meta">
                                <a>返校 DETENTION 遊戲、返校 DETENTION 遊戲原聲帶。</a>
                            </div>                        
                        </div>                        
                    </div>                                          
                </div>
                
            </div>
            <div className='prdocutionItems'>
                <div className='br'></div>
                <h2>遊戲</h2>
                <div class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production004.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">返校+還願 | 完整收藏包</div>
                            <div class="meta">
                                <a>遊戲主程式（數位版下載版）</a>
                            </div>                        
                        </div>  
                        <div class="extra content fontSize19">
                            <span class="right floated" style={{color:'black'}}>
                                US$ 16.99
                            </span>
                            <span>
                                <i class="windows icon fontSize19" ></i>
                                <i class="apple icon"></i>                                
                            </span>
                        </div>                      
                    </div>  
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production005.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">還願DEVOTION | 完整收藏包</div>
                            <div class="meta">
                                <a>遊戲主程式（數位版下載版）</a>
                            </div>                        
                        </div>                        
                    </div>                                 
                </div>                
            </div>
            
            <div className='prdocutionItems'>
                <div className='br'></div>
                <h2>遊戲原聲帶</h2>
                <div class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production006.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">返校+還願 | 完整收藏包</div>
                            <div class="meta">
                                <a>收錄 還願DEVOTION 15首遊戲音樂（數位下載版）</a>
                            </div>                        
                        </div>                        
                    </div>  
                    <div class="card">
                        <div class="image">
                            <img alt='nopic' src="/images/production007.jpg"></img>
                        </div>
                        <div class="content">
                            <div class="header">還願DEVOTION | 完整收藏包</div>
                            <div class="meta">
                                <a>收錄 返校DETENTION 34首遊戲音樂（數位下載版）</a>
                            </div>                        
                        </div>                        
                    </div>                                          
                </div>
                
            </div>
        </div>
    )
    
}
    


export default Production;