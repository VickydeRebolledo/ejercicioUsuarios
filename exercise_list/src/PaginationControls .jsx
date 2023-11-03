import React from 'react';

function PaginationControls({ onPageChange, onPageSizeChange, currentPage, totalPages, pageSize }) {
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
      <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
        <option value="15">15 Usuarios</option>
        <option value="20">20 Usuarios</option>
        <option value="30">30 Usuarios</option>
      </select>
    </div>
  );
}

export default PaginationControls;