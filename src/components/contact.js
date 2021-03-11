import React, { useState } from 'react';
import myFirebase from '../config/firebase';
import {useHistory} from 'react-router-dom';

const Contact = () => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

const FetchInputValues = (e) => {
    e.preventDefault()
    const {name, email, message} = e.target.elements;
    myFirebase.database().ref(`contacts`)
    .push({
        name:name.value,
        email:email.value,
        message:message.value
    })
    history.push('/success');
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
                                <input name="name" required type="text" class="form-control" id="name" placeholder="Enter name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1">Email</label>
                                <input Name="email" placeholder="Enter email" required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="message">Message</label>
                                <textarea className="form-control" required type="text" name="message" placeholder="Type message .." id="message" />
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