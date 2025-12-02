// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setUser }) => {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    // dummy registration (replace with real API)
    const userData = { userName: form.name, email: form.email };
    setUser(userData);
    toast.success("Registered & logged in");
    nav("/rent");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" />
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <p className="form-footer">
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
