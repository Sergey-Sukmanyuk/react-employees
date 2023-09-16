import { Component } from "react";

import "./search-panel.scss";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  setTerm = (e) => {
    let term = e.target.value;

    this.props.getTerm(term);
    this.setState({term}); 
  };

  render() {
    return (
      <div className="search-panel">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={this.setTerm}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchPanel;
