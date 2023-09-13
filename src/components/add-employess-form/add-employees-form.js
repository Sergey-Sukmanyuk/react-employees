
import './add-employees-form.scss';

const AddEmployeesForm = () => {
  return (
    <div className='add-employees-form'>
      <form>
        <legend>Додати нового співробітника</legend>
        <div className='form-field-wrapper d-flex'>
        <input type='text' className='form-control form-input' id='name' />
        <input type='number' className='form-control form-input' id='salary' />
        <button type='submit' className='btn btn-outline-light'>Додати</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeesForm;