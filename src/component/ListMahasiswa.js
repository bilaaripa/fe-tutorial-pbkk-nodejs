import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    getMahasiswa();
  }, []);

  const getMahasiswa = async () => {
    try {
      const response = await axios.get("http://localhost:5000/mahasiswa");
      setMahasiswa(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteMahasiswa = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/mahasiswa/${id}`);
      getMahasiswa();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New Mahasiswa
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>NRP</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs, index) => (
              <tr key={mhs.id}>
                <td>{index + 1}</td>
                <td>{mhs.name}</td>
                <td>{mhs.NRP}</td>
                <td>{mhs.Email}</td>
                <td>
                  <Link
                    to={`edit/${mhs.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteMahasiswa(mhs.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListMahasiswa;
