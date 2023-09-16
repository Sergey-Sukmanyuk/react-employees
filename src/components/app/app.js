import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import FilterPanel from "../filter-panel/filter-panel";
import EmployeesList from "../employees-list/employees-list";
import AddEmployeesForm from "../add-employess-form/add-employees-form";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, name: "John S.", salary: 800, increase: false, review: true },
        {
          id: 2,
          name: "Devid J.",
          salary: 2000,
          increase: true,
          review: false,
        },
        {
          id: 3,
          name: "Samuel P.",
          salary: 3000,
          increase: false,
          review: false,
        },
      ],
      term: "",
      active: "all",
    };
  }

  onDelete = (id) => {
    this.setState({
      data: this.state.data.filter((item) => item.id !== id),
    });
  };

  onPropToggle = (id, value) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [value]: !item[value] };
        }
        return item;
      }),
    }));
  };

  addEmployee = (data) => {
    const newEmpl = {
      name: data.name,
      salary: data.salary,
      id: nextId(),
      increase: false,
      review: false,
    };

    this.setState(({ data }) => {
      const newData = [...data, newEmpl];

      return {
        data: newData,
      };
    });
  };

  emplSearch = (data, term) => {
    if (!term.length) return data;

    return data.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  getTerm = (term) => {
    this.setState({ term });
  };

  toggleFilter = (data, active) => {
    switch (active) {
      case "rise":
        return data.filter((item) => item.review);
      case "more":
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  onFilterClick = (active) => {
    this.setState({active})
  };

  render() {
    const { data, term, active } = this.state;
    const employees = data.length;
    const salaryReview = data.filter((item) => item.review).length;
    const visibleData =this.toggleFilter(this.emplSearch(data, term), active);

    return (
      <div className="app">
        <AppInfo employees={employees} salaryReview={salaryReview} />

        <div className="filter-bar">
          <SearchPanel getTerm={this.getTerm} />
          <FilterPanel active={active} onFilterClick={this.onFilterClick}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.onDelete}
          onPropToggle={this.onPropToggle}
        />
        <AddEmployeesForm addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
