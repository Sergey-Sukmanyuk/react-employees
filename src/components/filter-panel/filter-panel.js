
import './filter-panel.scss'

const FilterPanel = () => {
    return (
        <div className='filter-panel'>
            <button type="button" className="btn btn-outline-light active">Всі співробітники</button>
            <button type="button" className="btn btn-outline-light">На підвищення</button>
            <button type="button" className="btn btn-outline-light">З/П більше 1000$</button>
        </div>
    )
}

export default FilterPanel;