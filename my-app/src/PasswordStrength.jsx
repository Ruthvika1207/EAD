import React, { useState } from "react";

export default function PasswordStrength() {
  const [password, setPassword] = useState("");

  const checkStrength = (pass) => {
    if (pass.length === 0) return "";
    if (pass.length < 6) return "Weak Password";
    if (
      pass.match(/[A-Z]/) &&
      pass.match(/[0-9]/) &&
      pass.match(/[^A-Za-z0-9]/)
    )
      return "Strong Password";
    return "Moderate Password";
  };

  return (
    <div>
      <h3>Password Strength Checker</h3>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{checkStrength(password)}</p>
    </div>
  );
}
