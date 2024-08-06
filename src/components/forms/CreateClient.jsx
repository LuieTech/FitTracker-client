import React, { useState } from 'react'
import { createClient } from '../../services/backend-service/client.service';
import { useNavigate } from 'react-router-dom';
import "./CreateClient.css"
import { useTrainerContext } from '../../context/trainer.context';

function CreateClient({onCreate}) {
  const navigate = useNavigate()
  const {user} = useTrainerContext()

  const [formData, setFormData] = useState({
    trainer: "",
    name: '',
    address: '',
    phoneNumber: '',
    email: ''
});

const handleInputChange = (e) => {
  const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value,
        trainer: {id: user?.id}
    });
};

const handleSubmit = (e) => {
  e.preventDefault()
  onCreate(formData)
}

return (
    <form className='form d-flex' onSubmit={handleSubmit}>
        <input
            className='inputs'
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
        />
        <input
            className='inputs'
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            required
        />
        <input
            className='inputs'
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            type="number"
            required
        />
        <input
            className='inputs'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            type="email"
            required
        />
        <button className='btn btn-sm btn-success font-weight-bold' type="submit">Add Client</button>
    </form>
);
}

export default CreateClient