import React, { Component, Fragment } from 'react';
import Blogpost from '../Pages/Blogpost/Blogpost';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import {BrowserRouter as Router,Route,Link, BrowserRouter} from "react-router-dom";
import './Home.css';

class Home extends Component {
    state = {
        showComponent: true
    }

    // componentDidMount (){
    //     // setTimeout (() => {
    //     //     this.setState({
    //     //         showComponent: false
    //     //     })
    //     // }, 15000)
    // }
    render() {
        return (
            <BrowserRouter>
                {/* <div>
                <p>Youtube Component</p>
                <hr/>
                    <YouTubeComp time="7.12" title="Belajar react js bagian 1" desc="1 jt kali ditonton. 1 minggu yang lalu"/>
                    <YouTubeComp time="8.20" title="Belajar react js bagian 2" desc="2 jt kali ditonton. 2 minggu yang lalu"/>
                    <YouTubeComp time="6.40" title="Belajar react js bagian 3" desc="3 jt kali ditonton. 3 minggu yang lalu"/>
                    <YouTubeComp time="10.01" title="Belajar react js bagian 4" desc="4 jt kali ditonton. 4 minggu yang lalu"/>
                    <YouTubeComp/>
                    <p>Counter</p>
                    <hr/>
                    <Product/>
                    <p>LifeCycle Component</p>
                    <hr/>
                    {
                        //jika statecomponent bernilai true maka munculkan LifeCycleComp,jika statecomponent bernilai false maka tidak memunculkan komponen apapun.
                        this.state.showComponent ?
                        <LifeCycleComp/> : null
                    }
                    <p>Blog Post</p>
                    <hr/>
                    <Blogpost/>
                </div> */}
                <Fragment>
                <div className="navigation">
                    <Link to="/">Blogpost</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                </div>
                    <Route path="/" exact component={Blogpost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;
