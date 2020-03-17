import React, { Component } from "react";
import ReactModal from "react-modal";

import complexOperation from "../../utils";

const modalStyle = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Complexity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      complexity: 0,
      result: null
    };

    this.openModalHandler = this.openModalHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.computeHandle = this.computeHandle.bind(this);
    this.handleComplexityChange = this.handleComplexityChange.bind(this);
  }

  componentDidMount() {
    ReactModal.setAppElement(document.querySelector("body"));
  }

  openModalHandler() {
    this.setState({ open: true });
  }

  closeModalHandler() {
    this.setState({
      open: false,
      complexity: 0,
      loading: false
    });
  }

  getComplexValue(complexity) {
    return new Promise(resolve => resolve(complexOperation(complexity)));
  }

  computeHandle() {
    const { complexity } = this.state;
    this.setState({
      open: false,
      loading: true
    });

    this.getComplexValue(complexity).then(result =>
      this.setState({
        open: false,
        loading: true,
        result
      })
    );
  }

  handleComplexityChange(event) {
    this.setState({
      complexity: event.target.value
    });
  }

  showResult() {
    const { result, loading } = this.state;
    if (result) {
      return result;
    }

    if (loading) {
      return "Loading...";
    }

    return "Not computed yet";
  }

  render() {
    const { open, complexity } = this.state;
    const result = this.showResult();
    return (
      <>
        <div className="results-container">
          <div>Value: {result}</div>
          <button type="button" onClick={this.openModalHandler}>
            Compute
          </button>
        </div>
        <ReactModal
          isOpen={open}
          style={modalStyle}
          contentLabel="Compute complex expression"
          onRequestClose={this.closeModalHandler}
        >
          <h1>Complexity</h1>
          <input value={complexity} onChange={this.handleComplexityChange} />
          <button type="button" onClick={this.computeHandle}>
            Apply
          </button>
        </ReactModal>
      </>
    );
  }
}

export default Complexity;
