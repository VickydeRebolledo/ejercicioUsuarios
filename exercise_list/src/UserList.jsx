import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './UserList.css';
import PaginationControls from './PaginationControls ';

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedNationality, setSelectedNationality] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const resultsPerPage = pageSize;
      const page = currentPage;

      const nationalityParam = selectedNationality ? `&nat=${selectedNationality}` : '';

      const response = await fetch(`https://randomuser.me/api/?results=${resultsPerPage}&page=${page}${nationalityParam}`);
      const data = await response.json();

      setUsers(data.results);
      setTotalResults(data.info.results);
    };

    fetchUsers();
  }, [currentPage, pageSize, selectedNationality]);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalResults / pageSize)) {
      setCurrentPage(newPage);
    }
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar el tamaño de la página
  };

  const handleNationalityChange = (event) => {
    setSelectedNationality(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar la nacionalidad
  };

  return (
    <div>
      <div className="user-list">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.large} alt="User" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={() => openModal(user)}>
              <FaInfoCircle /> Details
            </button>
          </div>
        ))}
      </div>

      <select value={selectedNationality} onChange={handleNationalityChange}>
        <option value="">Todas las Nacionalidades</option>
        <option value="US">Estados Unidos</option>
        <option value="CA">Canadá</option>
        <option value="MX">México</option>
        <option value="ES">España</option>
      </select>

      <PaginationControls
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        currentPage={currentPage}
        totalPages={Math.ceil(totalResults / pageSize)}
        pageSize={pageSize}
      />

      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
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
