import React, { Component } from 'react';

class Blog extends Component {
    render(){
        const postList = this.props.posts.map((i, idx) =>{
        return <>
        <h1 key={idx}>{i.title}</h1>
        <li key={idx}>{i.body}</li>
        </>
        })
        return(
            <div>
                <h1>My blog</h1>
                {postList}
            </div>
        )
    }
}

export default Blog;