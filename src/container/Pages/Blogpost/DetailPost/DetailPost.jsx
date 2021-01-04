import Axios from 'axios';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './detailPost.css';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            console.log('result: ', res);
            let post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render(){
        return(
            <div className = "p-detail-post">
                <p className ="detail-title">{this.state.post.title}</p>
                <p className ="detail-body">{this.state.post.body}</p>
            </div>
            
        )
    }
}

export default withRouter(DetailPost);