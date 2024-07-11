import { useState } from "react"



function BookingForm(availableTimes) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    // const options = availableTimes.map(time => <option key={time}>{time}</option>)

    const currentDate = new Date().toISOString().split("T")[0]

    const handleSubmit = () => { }

    const handleFormChange = () => { }

    const handleDateChange = () => { }


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
                        required
                    />
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
                        required
                    />
                </div>
                <div className="separate">
                    <label htmlFor="contact-number">Contact Number</label>
                    <input
                        type="text"
                        id="contact-number"
                        name="contactNumber"
                        placeholder="Enter your contact number..."
                        value={formData.contactNumber} onChange={handleFormChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
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
                            required min={currentDate}
                        />
                    </div>
                    <div className="separate separate-child">
                        <label htmlFor="res-time">Choose time</label>
                        <select
                            id="res-time "
                            name="time"
                            value={formData.time}
                            onChange={handleFormChange}
                            required
                        >

                        </select>
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