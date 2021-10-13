import React from 'react';
import Header from './Header'
import Carousel from './Carousel'
import Production from './Production'
import Footer from './Footer'


class App extends React.Component{
    
    state = {
        menuBar:'Home'

    }
    
    render(){
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <Production></Production>
                <Footer></Footer>
            </div>
        )

    }


}

export default App;