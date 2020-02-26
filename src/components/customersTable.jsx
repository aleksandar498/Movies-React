import React from "react";
const CustomersTable = props => {
  const { customers, onDelete, onSort } = props;

  return (
    <table className="table">
      <thead className="bg-danger">
        <tr>
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("username")}>Username</th>
          <th onClick={() => onSort("email")}>Email</th>
          <th onClick={() => onSort("address")}>Address</th>
          <th onClick={() => onSort("phone")}>Phone</th>
          <th onClick={() => onSort("website")}>Website</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer._id}>
            <td>{customer.name}</td>
            <td>{customer.username}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.phone}</td>
            <td>{customer.website}</td>
            <td>
              <button
                onClick={() => onDelete(customer)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomersTable;
