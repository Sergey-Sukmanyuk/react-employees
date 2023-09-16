
import './app-info.scss';

const AppInfo = (props) => {
    const { employees, salaryReview } = props;
    return(
        <div className='app-info'>
            <h2 className='app-info__title'>Облік співробітників у компанії ХХХ</h2>
            <h3 className='app-info__subtitle'>Загальна кількість співробітників: {employees}</h3>
            <h3 className='app-info__subtitle'>На отримання премії подано: {salaryReview}</h3>
        </div>
    )
}

 export default AppInfo;