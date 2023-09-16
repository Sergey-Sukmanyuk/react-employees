import './employees-list-item.scss';

const EmployeesListItem = (props) => {
    const { name, salary, increase, review, onDelete, onPropToggle } = props;

    const classList = `list-group-item d-flex justify-content-between align-items-center ${increase ? 'increase': ''} ${review ? 'like': ''}`;

      return (
    <>
      <li className={classList}>
        <span className='employees-name' data-toggle='increase' onClick = {onPropToggle}>{name}</span>
        <input className='employees-salary' type='text' defaultValue={salary}/>
        <div className='d-flex justify-content-between align-items-center'>
          <button className='btn-cookie btn-sm' data-toggle='review' onClick={onPropToggle}>
            <i className='fa-solid fa-cookie'></i>
          </button>
          <button className='btn-trash btn-sm' onClick={onDelete}>
            <i className='fa-solid fa-trash'></i>
          </button>
          <i className='fa-solid fa-star'></i>
        </div>
      </li>
    </>
  );
};

export default EmployeesListItem;
