import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = () => {
  return (
    <div className="employees-list">
      <ul class="list-group">
        <EmployeesListItem/>
        <EmployeesListItem/>
      </ul>
    </div>
  );
};

export default EmployeesList;
