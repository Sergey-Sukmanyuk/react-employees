import "./filter-panel.scss";

const FilterPanel = (props) => {
  const btnsData = [
    { name: "all", value: "Всі співробітники" },
    { name: "rise", value: "На підвищення" },
    { name: "more", value: "З/П більше 1000$" },
  ];

  const buttons = btnsData.map(({ name, value }) => {
    const clazz = props.active === name ? "btn-light" : "btn-outline-light";
    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => {
          props.onFilterClick(name);
        }}
      >
        {value}
      </button>
    );
  });
  return <div className="filter-panel">{buttons}</div>;
};

export default FilterPanel;
