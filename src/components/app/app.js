import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import FilterPanel from '../filter-panel/filter-panel';
import EmployeesList from '../employees-list/employees-list';
import AddEmployeesForm from '../add-employess-form/add-employees-form';

import './app.scss';

const App = () => {
    return (
        <div className='app'>
            <AppInfo />

            <div className='filter-bar'>
                <SearchPanel />
                <FilterPanel />
            </div>

            <EmployeesList />
            <AddEmployeesForm />
        </div>
    )
}

export default App;