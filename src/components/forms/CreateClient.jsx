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
    <form className=" form-inputs d-flex flex-wrap align-items-center col-10" onSubmit={handleSubmit}>
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
        placeholder="(e.g., 123-456-7890)"
        type="text"
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
      <div>
        <textarea
          className="form-control-sm inputs ps-3"
          id="exampleFormControlTextarea1"
          rows="3"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="comment..."
        /> 
      </div>

      <button
          className="btn btn-sm btn-success" 
          type="submit"
        >
          Create Client
        </button>
    </form>
  );
}

export default CreateClient;
