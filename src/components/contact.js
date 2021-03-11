import React, { useState } from 'react';
import myFirebase from '../config/firebase';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

const FetchInputValues = (e) => {
    e.preventDefault()
    const {name, email, message} = e.target.elements;
    myFirebase.database().ref(`contacts/${email}`)
    .set({
        name:name.value,
        email:email.value,
        message:message.value
    })
}
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md">
                
                </div>
                <div className="col-md-6">
                <h1>Contact us</h1>
                    <form onSubmit={FetchInputValues}>
                    <div class="mb-3">
                        <label for="name">Name</label>
                        <input name="name" type="text" class="form-control" id="name" placeholder="Enter name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Email</label>
                        <input Name="email" placeholder="Enter email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="form-group">
                        <lable for="message">Message</lable>
                        <textarea type="text" name="message" placeholder="Type message .." id="message" />
                    </div>

                    <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </div>
                <div className="col-md">
                
                </div>
            </div>
        </div>
    )
}

export default Contact;