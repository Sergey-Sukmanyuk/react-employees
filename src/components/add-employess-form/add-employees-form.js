import { Component } from "react";

import "./add-employees-form.scss";

class AddEmployeesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
    };
  }

  onInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAdd = (e) => {
    e.preventDefault();

    const { addEmployee } = this.props;

    if (this.state.name.length > 3 && this.state.salary) {
      addEmployee(this.state);

      this.setState({
        name: "",
        salary: "",
      });
    }
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="add-employees-form">
        <h3 className="add-form-title">Додати нового співробітника</h3>
        <form onSubmit={this.onAdd}>
          <div className="form-field-wrapper d-flex">
            <input
              type="text"
              className="form-control form-input"
              name="name"
              value={name}
              id="name"
              placeholder="Введіть ім'я"
              onChange={this.onInput}
            />
            <input
              type="number"
              className="form-control form-input"
              name="salary"
              value={salary}
              id="salary"
              placeholder="Заробітна платня в $"
              onChange={this.onInput}
            />
            <button type="submit" className="btn btn-outline-light">
              Додати
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEmployeesForm;
