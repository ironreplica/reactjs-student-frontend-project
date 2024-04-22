import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
import "../components/components.scss";

const apiString = `https://nodejs-student-api-hg21.onrender.com/students`;
const Record = (props) => (
  <tr>
    <td>{props.record.firstName}</td>
    <td>{props.record.lastName}</td>
    <td>{props.record.email}</td>
    <td>{props.record.age}</td>
    <td>{props.record.currentCollege}</td>
    <td>
      <Link className="modify-student edit" to={`/edit/${props.record._id}`}>
        Edit
      </Link>
      |
      <button
        className="modify-student delete"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    setLoading(true);

    async function getRecords() {
      const response = await fetch(apiString);
      setLoading(false);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recordsResponse = await response.json();
      setRecords(recordsResponse);
    }

    getRecords();
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`${apiString}/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="angled-bg">
      <div className="container">
        <h3 className="contact-title">Contact List</h3>
        <table
          className={loading ? "loading-wrapper-style" : "table"}
          style={{ marginTop: 20 }}
        >
          {loading ? null : (
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Current College</th>
                <th>Modify Student</th>
              </tr>
            </thead>
          )}
          <tbody className={loading ? "loading-center-wheel" : null}>
            {loading ? <Loader /> : recordList()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
