
import React, { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
  });

  const doctors = [
    'Dr.Abhideep Chaudhary',
    'Dr.Atul Sachdev',
    'Dr.Aparna Sinha',
    'Dr. Balbir Singh',
    'Dr.Sandeep Bhudhiraja',
    'Dr.Bipin walia',
    'Dr.Neha sharma',
    'Dr.Raj Rani',



  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', form);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Doctor Appointment Booking</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Time:</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Choose Doctor:</label>
          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
        <button id='button' type="submit" style={styles.button}>Book Appointment</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'Blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: '#28176',
  },
};

export default BookingForm;
