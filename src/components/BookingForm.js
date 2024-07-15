import React, { useState } from "react";




function BookingForm({ availableTimes, dispatch, submitForm }) {
    const initialState = {
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "",
        noOfGuests: 1,
        occasion: "None"
    }
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        date: '',
        time: '',
    })


    const currentDate = new Date().toISOString().split("T")[0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    const handleDateChange = async (event) => {
        const { name, value } = event.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
        dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFromValue) => ({
            ...prevFromValue,
            [name]: value
        }))
    }

    const validate = () => {
        let valid = true
        const newErrors = {
            firstName: '',
            lastName: '',
            contactNumber: '',
            date: '',
            time: '',
        }
        if (!formData.firstName) {
            newErrors.firstName = 'Please enter your first name'
            valid = false
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Please enter your last name'
            valid = false
        }
        if (!formData.contactNumber) {
            newErrors.contactNumber = 'Please enter your contact number'
            valid = false
        }
        if (!formData.date) {
            newErrors.date = 'Please select your date reservation'
            valid = false
        }
        if (!formData.time) {
            newErrors.time = 'Please select your time'
            valid = false
        }
        setErrors(newErrors)
        return valid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            submitForm(formData)
            setFormData(initialState)
        }
    }

    return (
        <main className="reservation-wrap">
            <p className="desc-text form-desc">Please fill in the form below accurately to enable us serve you nicely</p>
            <form onSubmit={handleSubmit}>
                <div className="separate">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        placeholder="Enter your first name..."
                        value={formData.firstName}
                        onChange={handleFormChange}
                    />
                    {errors.firstName && (<p className="error-message">{errors.firstName}</p>)}
                </div>
                <div className="separate">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        placeholder="Enter your last name..."
                        value={formData.lastName}
                        onChange={handleFormChange}
                    />
                    {errors.lastName && (<p className="error-message">{errors.lastName}</p>)}
                </div>
                <div className="separate">
                    <label htmlFor="contact-number">Contact Number</label>
                    <input
                        type="text"
                        id="contact-number"
                        name="contactNumber"
                        placeholder="Enter your contact number..."
                        value={formData.contactNumber}
                        onChange={handleFormChange}
                    />
                    {errors.contactNumber && (<p className="error-message">{errors.contactNumber}</p>)}
                </div>
                <div className="date-time">
                    <div className="separate separate-child">
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            id="res-date"
                            name="date"
                            value={formData.date}
                            onChange={handleDateChange}
                            min={currentDate}
                        />
                        {errors.date && (<p className="error-message">{errors.date}</p>)}
                    </div>
                    <div className="separate separate-child">
                        <label htmlFor="res-time">Choose time</label>
                        <select
                            id="res-time "
                            name="time"
                            value={formData.time}
                            onChange={handleFormChange}
                        // required
                        >
                            {options}
                        </select>
                        {errors.time && (<p className="error-message">{errors.time}</p>)}
                    </div>
                </div>
                <div className="guests-occasion">
                    <div className="separate separate-child">
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange} />
                    </div>
                    <div className="separate separate-child">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                        </select>
                    </div>
                </div>
                <button className="btn">Reserve</button>
            </form>
        </main>
    )
}

export default BookingForm