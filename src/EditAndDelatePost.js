import React, { Component, useState } from 'react';
import fire from './config/Fire';
import Like from './like';
import './style.css';

let db = fire.firestore();
let user = fire.auth().currentUser;
console.log(user);

class EditAndDelatePost extends Component {
    constructor(props){
    super(props);
    this.state= {post:[], edit:'', newPost:''};

    this.handleNewPostChange = this.handleNewPostChange.bind(this);
   
}
   
    componentDidMount(){
       
        db.collection("POST").onSnapshot((snapShot) => {
            
            this.setState({

                post: snapShot.docs.map(doc =>{
                     
                     return {id:doc.id, data:doc.data().post}
                })        
            })
        })
    }

    editPost = (id)=>{
        this.setState({
            edit:id
        })
    }

    deletePost=(id)=>{
        db.collection("POST").doc(id).delete()
        .then(()=> {
            console.log("Document successfully deleted!");
        }).catch((error)=> {
            console.error("Error removing document: ", error);
        });
    }

    handleNewPostChange=(event)=>{
        this.setState({
            newPost:event.target.value
        })
    }

    actionEdit=(id)=>{
        db.collection("POST").doc(id).update({
            post:this.state.newPost
        })
    }
 

       
    render(){
        const{post}=this.state;
        const{edit}=this.state;
        const{newPost}=this.state;
        console.log(newPost)
        console.log(edit)
        return(
            post && post !== undefined? post.map((el)=>
            // <section className="wall-seccion">
                <div className="wall-body" key={el.id}>

                    <div className="wall-form">

                        <div className="wall-post"> 
                            <div className="wall-text">nombre</div>
                            <div className="wall-input">
                                { edit === el.id ? <textarea type="text"  className="wall-input-edit" value={newPost} onChange={this.handleNewPostChange}/> : <textarea className="wall-input-edit">{el.data}</textarea>}
                            </div>
                            <div className="btn-post">
                            <div className="wall-edit">
                                {edit === el.id ? <button onClick={()=>this.actionEdit(el.id)}><i className="fas fa-check"></i></button> : <button className="wall-edit-button" onClick={()=> this.editPost(el.id)}><i className="fas fa-edit"></i></button>}
                            </div>
                            <div className="wall-remove">
                                <button onClick={()=> this.deletePost(el.id)}><i className="fas fa-trash-alt"></i></button>
                            </div>
                            </div>
                        </div>

                        <div className="wall-body-button">
                            <div className="wall-heart">
                                <Like/>
                            </div>
                            {/* <div className="wall-edit">
                                {edit === el.id ? <button onClick={()=>this.actionEdit(el.id)}>listo</button> : <button className="wall-edit-button" onClick={()=> this.editPost(el.id)}>editar</button>}
                            </div>
                            <div className="wall-remove">
                                <button onClick={()=> this.deletePost(el.id)}>Eliminar</button>
                            </div> */}
                        </div>

                    </div>   

                </div>): <p></p>
            // </section>
        )
    }
}

export default EditAndDelatePost ;