import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = (props) => {
const { onDelete, onPropToggle } = props;

const elements = props.data.map(employee => {
  const { id, ...restProp } = employee;
  return <EmployeesListItem key = {id} {...restProp} onDelete={() => onDelete(id) } onPropToggle={(e) => onPropToggle(id, e.currentTarget.getAttribute('data-toggle'))} />
})

  return (
    <div className="employees-list">
      <ul className="list-group">
        {elements}
      </ul>
    </div>
  );
};

export default EmployeesList;
