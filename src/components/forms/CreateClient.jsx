import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateClient.css";
import { useTrainerContext } from "../../context/trainer.context";
function CreateClient({ onCreate }) {
  const { trainer } = useTrainerContext();

  const [formData, setFormData] = useState({
    trainer: "",
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    comment: ""
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      trainer: { id: trainer?.id },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      trainer: "",
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      comment: ""
    });
  };

  return (
    <form className="form-inputs d-flex" onSubmit={handleSubmit}>
      <input
        className="inputs ps-3 form-control-sm"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        className="inputs ps-3 form-control-sm"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        required
      />
      <input
        className="inputs ps-3 form-control-sm"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone Number"
        type="number"
        required
      />
      <input
        className="inputs ps-3 form-control-sm"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="name@example.com"
        type="email"
        required
      />
      
        <textarea
          className="form-control-sm inputs ps-3"
          id="exampleFormControlTextarea1"
          rows="3"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        ></textarea>
      <button
        className="btn btn-sm btn-success font-weight-bold m-3"
        type="submit"
      >
        Add Client
      </button>
    </form>
  );
}

export default CreateClient;
