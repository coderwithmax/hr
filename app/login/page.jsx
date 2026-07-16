"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

const  Login = ()=> {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });


      const data = await res.json();


      if (!res.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }


      // Login success
      router.push("/dashboard");


    } catch (error) {
      setError("Something went wrong");
    }


    setLoading(false);
  };


  return (
    <div className={styles.container}>

      <div className={styles.card}>

        <h1 className={styles.title}>
          HRM Login
        </h1>


        <p className={styles.subtitle}>
          Login to your account
        </p>


        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}



        <form 
          onSubmit={handleSubmit}
          className={styles.form}
        >


          <div className={styles.group}>

            <label>
              Email Address
            </label>


            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>



          <div className={styles.group}>

            <label>
              Password
            </label>


            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>



          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >

            {
              loading 
              ? "Logging in..."
              : "Login"
            }

          </button>


        </form>



        <div className={styles.footer}>

          Don't have an account?


          <button
            className={styles.link}
            onClick={() => router.push("/register")}
          >

            Register

          </button>


        </div>


      </div>

    </div>
  );
}
export default Login