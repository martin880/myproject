//libraries
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

//pages
import Blogpost from '../Pages/Blogpost/Blogpost';
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import YouTubeCompPage from '../Pages/YouTubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/Blogpost/DetailPost/DetailPost';

//style
import './Home.css';
class Home extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            <Router>
                <Fragment>
                <div className="navigation">
                    <Link to="/">Blogpost</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/youtube-component">YouTube</Link>
                </div>
                    <Route path="/" exact component={Blogpost}/>
                    <Route path="/detail-post/:postID" component={DetailPost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                    <Route path="/youtube-component" component={YouTubeCompPage}/>
                </Fragment>
            </Router>
        )
    }
}

export default Home;
