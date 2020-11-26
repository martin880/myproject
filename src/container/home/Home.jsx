import React, { Component } from 'react';
import Blogpost from '../../component/Blogpost/Blogpost';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../../component/Product/Product';
// import LifeCycleComp from '../../component/LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount (){
        setTimeout (() => {
            this.setState({
                showComponent: false
            })
        }, 15000)
    }
    render() {
        return (
            <div>
            {/* <p>Youtube Component</p>
            <hr/> */}
                {/* <YouTubeComp time="7.12" title="Belajar react js bagian 1" desc="1 jt kali ditonton. 1 minggu yang lalu"/>
                <YouTubeComp time="8.20" title="Belajar react js bagian 2" desc="2 jt kali ditonton. 2 minggu yang lalu"/>
                <YouTubeComp time="6.40" title="Belajar react js bagian 3" desc="3 jt kali ditonton. 3 minggu yang lalu"/>
                <YouTubeComp time="10.01" title="Belajar react js bagian 4" desc="4 jt kali ditonton. 4 minggu yang lalu"/>
                <YouTubeComp/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product/> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                     //jika statecomponent bernilai true maka munculkan LifeCycleComp,jika statecomponent bernilai false maka tidak memunculkan komponen apapun.
                    this.state.showComponent ?
                    <LifeCycleComp/> : null
                } */}
                <p>Blog Post</p>
                <hr/>
                <Blogpost/>
            </div>
        )
    }
}

export default Home;
