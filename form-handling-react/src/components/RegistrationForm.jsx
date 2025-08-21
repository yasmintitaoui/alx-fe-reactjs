import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }
    setError("");
    // mock submit
    console.log("Submitted (controlled):", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "2rem auto" }}>
      <h2>Register (Controlled)</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginBottom: 12 }}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={{ width: "100%", padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: 8 }}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
