import React, { Component, Fragment } from 'react';
import './Blogpost.css';
import Post from '../Post/Post';
import Axios from 'axios';

class Blogpost extends Component {
    state = {
        post: []
    }

   componentDidMount () {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //     this.setState ({
    //         post: json
    //     })
    //  })
    Axios.get('http://localhost:3004/posts')
    .then((result) => {
        this.setState({
            post: result.data
        })
    })
   }
    
    render() {
        return (
            <Fragment>
            <p className="section-title">Blog Post</p>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} title={post.title} desc={post.body} />
                })
            }
            </Fragment>
        )
    }
}
export default Blogpost;
