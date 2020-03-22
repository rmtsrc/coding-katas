import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

import complexOperation from '../../utils';

const modalStyle = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Complexity() {
  const [state, setState] = useState({
    open: false,
    loading: false,
    complexity: 0,
    result: null,
  });

  useEffect(() => ReactModal.setAppElement(document.querySelector('body')), []);

  const openModalHandler = () => setState({ ...state, open: true });

  const getComplexValue = complexity =>
    new Promise(resolve => setImmediate(() => resolve(complexOperation(complexity))));

  const computeHandle = async () => {
    const { complexity } = state;
    setState({
      ...state,
      open: false,
      loading: true,
    });

    const result = await getComplexValue(complexity);
    setState({
      ...state,
      open: false,
      loading: false,
      result,
    });
  };

  const handleComplexityChange = event =>
    setState({
      ...state,
      complexity: event.target.value,
    });

  const getResult = () => {
    const { result, loading } = state;
    if (loading) {
      return 'Loading...';
    }

    if (result) {
      return result;
    }

    return 'Not computed yet';
  };

  const { open, complexity } = state;
  const result = getResult();
  return (
    <>
      <p>Value: {result}</p>
      <button type="button" onClick={openModalHandler}>
        Compute
      </button>
      <ReactModal isOpen={open} style={modalStyle} contentLabel="Compute complex expression">
        <h1>
          <label htmlFor="complexity">Complexity</label>
        </h1>
        <input id="complexity" value={complexity} onChange={handleComplexityChange} />
        <button type="button" onClick={computeHandle}>
          Apply
        </button>
      </ReactModal>
    </>
  );
}

export default Complexity;
