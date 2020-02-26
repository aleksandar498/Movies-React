import React, { Component } from "react";
import { getCustomers } from "./../services/fakeCustomersService";
import _ from "lodash";

import Pagination from "./common/pagination";
import SearchBox from "./searchBox";
import { paginate } from "./../utils/paginate";
import CustomersTable from "./customersTable";
class Customers extends Component {
  state = {
    customers: getCustomers(),
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" }
  };
  handleSort = path => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };
  handleDelete = customer => {
    const customers = this.state.customers.filter(c => c._id !== customer._id);
    this.setState({ customers: customers });
  };
  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.customers.length === 0)
      return <p>There are no customers in database</p>;
    const {
      currentPage,
      pageSize,
      sortColumn,
      searchQuery,
      customers
    } = this.state;
    let filtered = customers;
    if (searchQuery)
      filtered = customers.filter(c =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const customersS = paginate(sorted, currentPage, pageSize);
    return (
      <div className="col">
        <p>Shoving {filtered.length} customers in database</p>
        <SearchBox value={searchQuery} onChange={this.handleSearch}></SearchBox>
        <CustomersTable
          customers={customersS}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        ></CustomersTable>
        <Pagination
          itemsCount={filtered.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </div>
    );
  }
}

export default Customers;
