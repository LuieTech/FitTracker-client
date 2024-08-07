import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./CreateClient.css"
import { useTrainerContext } from '../../context/trainer.context';
import "./CreateClient.css"
function CreateClient({onCreate}) {

  const {trainer} = useTrainerContext()

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
        trainer: {id: trainer?.id}
    });
};

const handleSubmit = (e) => {
  e.preventDefault()
  onCreate(formData)
}

return (
    <form className='form-inputs d-flex' onSubmit={handleSubmit}>
        <input
            className='inputs ps-3'
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
        />
        <input
            className='inputs ps-3'
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            required
        />
        <input
            className='inputs ps-3'
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            type="number"
            required
        />
        <input
            className='inputs ps-3'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            type="email"
            required
        />
        <button className='btn btn-sm btn-success font-weight-bold m-3' type="submit">Add Client</button>
    </form>
);
}

export default CreateClient