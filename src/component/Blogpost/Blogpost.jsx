import React, { Component, Fragment } from 'react';
import './Blogpost.css';
import Post from '../Post/Post';
import Axios from 'axios';

class Blogpost extends Component {
    state = {
        post: [],
        formBlogpost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        Axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
        this.setState({
            post: result.data
        })
    })
    }

    postDataToAPI = () => {
        Axios.post('http://localhost:3004/posts', this.state.formBlogpost).then((res)=> {
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogpost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        }, (err) => {
            console.log('error: ', err);
        })
    }

    putDataToAPI = () => {
         Axios.put(`http://localhost:3004/posts/${this.state.formBlogpost.id}`, this.state.formBlogpost) .then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogpost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
    }

    handleRemove = (data) => {
        Axios.delete(`http://localhost:3004/posts/${data}`) .then((res) =>{
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogpost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let formBlogpostNew = {...this.state.formBlogpost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogpostNew['id'] = timestamp;
        }
        formBlogpostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogpost: formBlogpostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
    }

   componentDidMount () {
        this.getPostAPI();
   }
    
    render() {
        return (
            <Fragment>
            <p className="section-title">Blog Post</p>
            <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type="text" value={this.state.formBlogpost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogpost.body}/>
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} data= {post} remove={this.handleRemove} update={this.handleUpdate} />
                })
            }
            </Fragment>
        )
    }
}
export default Blogpost;
