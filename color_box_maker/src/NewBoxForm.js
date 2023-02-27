import React, { useState } from "react";
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: "rgb(0, 0, 0)"
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData});
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <div className="NewBoxForm-form-section">
                    <label htmlFor="height">Height (pixels 50-1000): </label>
                    <input id="height" type="number" name="height" onChange={handleChange} min="50" max="1000" value={formData.height} required/>
                </div>
                <div className="NewBoxForm-form-section">
                    <label htmlFor="width">Width (pixels 50-1000): </label>
                    <input id="width" type="number" name="width" onChange={handleChange} min="50" max="1000" value={formData.width} required/>
                </div>
                <div className="NewBoxForm-form-section">
                    <label htmlFor="backgroundColor">Color: </label>
                    <input id="backgroundColor" type="color" name="backgroundColor" onChange={handleChange} value={formData.backgroundColor} />
                </div>
                <button>Create Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;