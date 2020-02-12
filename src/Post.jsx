
import React, {useState} from 'react';
import fire from './config/Fire';


function Post(){

    let db = fire.firestore();
    let user = fire.auth().currentUser;
   

    const [post, setPost] = useState('');

    const handlePostChange = evt => {
        const newValue = evt.target.value;
        setPost(newValue);
    }

    const handleSubmit = evt => {    
    evt.preventDefault();
        let uid = user.uid;
       
        db.collection('POST').add({
            uid: uid,
            post: post
        })
        .then(docRef =>{
            console.log(post); 
            console.log('Document written with ID: ', docRef.id);
        })
        .catch(error=>{
            console.error('Error adding document: ', error);
        });

        setPost("");
    }
   
        return(
            // <section className="home-seccion-two">
                <div className="home-body">

                    <form className="home-form" onSubmit={handleSubmit}>

                        <div className="home-post"> 
                            <div className="home-text">Nombre de usuario</div>
                            <textarea type="text" className="home-input" placeholder="¿Qué estás pensando?" value={post} onChange={handlePostChange}></textarea>
                        </div>

                        <div className="home-body-button">
                            <input type="submit" className="home-button" id="sendpost"  value="Publicar"/>
                        </div>

                    </form>   

                </div>
            // </section>
        )
    
}

export default Post;

