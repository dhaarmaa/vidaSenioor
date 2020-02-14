
import React, {useState} from 'react';
import fire from './config/Fire'; //importo firebase


function Post(){

    let db = fire.firestore(); //llamo a firestore con el nombre de la fariable db
    let user = fire.auth().currentUser;//asi obtenemos al uruario que accedio
   

    const [post, setPost] = useState('');
//en esta funcion se manje el cambio de posteo
    const handlePostChange = evt => {
        const newValue = evt.target.value;// hace que tome valor el elemento que activo el evento
        setPost(newValue);//al conjunto de post se le da un nuevo avlor
    }
    //se maneja el envio de post
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

