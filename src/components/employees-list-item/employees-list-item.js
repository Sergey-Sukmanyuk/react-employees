
import './employees-list-item.scss';

const EmployeesListItem = () => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <span className='employees-name'>John Smith</span>
        <input className='employees-salary' type='text' defaultValue='1000$'/>
        <div className='d-flex justify-content-between align-items-center'>
          <button className='btn-cookie btn-sm'>
            <i class='fa-solid fa-cookie'></i>
          </button>
          <button className='btn-trash btn-sm'>
            <i class='fa-solid fa-trash'></i>
          </button>
          <i class='fa-solid fa-star'></i>
        </div>
      </li>
    </>
  );
};

export default EmployeesListItem;
