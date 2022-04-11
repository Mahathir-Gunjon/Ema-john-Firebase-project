import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email , setEmail] =useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value);
    };
    // const handleEmailBlur = event => {
    //     setEmail(event.target.value)
    // }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhnNumberBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser=event =>{
        event.preventDefault();

        const Shipping = {email, name, phone, address}
    }

    return (
        <div className='form-container'>
            <div>
                <h2>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-grp">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-grp">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" name="email" id="" required />
                    </div>
                    <div className="input-grp">
                        <label htmlFor="Address">Addreass</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-grp">
                        <label htmlFor="Phone">Phone number</label>
                        <input onBlur={handlePhnNumberBlur} type="number" name="number" id="" required />
                    </div>
                    <p>{error}</p>
                    <input className='lgn-btn' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;