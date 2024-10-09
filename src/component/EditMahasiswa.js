import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMahasiswa = () => {
  const [name, setName] = useState("");
  const [NRP, setNRP] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getMahasiswaById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/mahasiswa/${id}`
        );
        setName(response.data.name);
        setNRP(response.data.NRP);
        setEmail(response.data.Email);
      } catch (error) {
        console.log(error);
      }
    };

    getMahasiswaById();
  }, [id]);

  const updateMahasiswa = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/mahasiswa/${id}`, {
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
        <form onSubmit={updateMahasiswa}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMahasiswa;
