import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMahasiswa = () => {
  const [name, setName] = useState("");
  const [NRP, setNRP] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveMahasiswa = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/mahasiswa", {
        name,
        NRP,
        Email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveMahasiswa}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NRP</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NRP}
                onChange={(e) => setNRP(e.target.value)}
                placeholder="NRP"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMahasiswa;
