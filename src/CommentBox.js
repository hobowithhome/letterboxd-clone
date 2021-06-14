import { useState } from 'react';

const CommentBox = () => {

    const [ comment, setComment ]= useState('');
    const [ user, setUser ]= useState('atharva');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = { comment, user };

        fetch('http://localhost:8001/movies', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        }).then(() =>{
        console.log("new added")
        })
    }


    return (                 
    
    <div className="comment-box">
        <form onSubmit= {handleSubmit}>  
            <label>Leave your review!</label>
            <textarea 
                required
                value={ comment }
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <select
                value= { user }
                onChange= {(e) => setUser(e.target.value)}
            >
                <option value="atharva">Atharva</option>
                <option value="barry">Barry</option>
            </select>
            <button> Post review! </button>
        </form>

    </div> 
    
    );
}

 
export default CommentBox;