import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="user-list">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.large} alt="User" />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={() => openModal(user)}>
              <FaInfoCircle /> Details
            </button>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>User Address: </h2>
            <p>Street: {selectedUser.location.street.name}</p>
            <p>City: {selectedUser.location.city}</p>
            <p>State: {selectedUser.location.state}</p>
            <p>Postal Code: {selectedUser.location.postcode}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;