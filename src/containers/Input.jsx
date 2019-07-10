import React, { Component } from 'react';

import validation from '../utils/validation';

class Input extends Component {
  state = {
    input: '',
    result: '',
    errorMsg: '',
    isValid: true,
  };

  handleInput = e => {
    let input = e.target.value;
    this.setState({ input });
  };

  handleSubmit = e => {
    e.preventDefault();
    let objValidate = validation(this.state.input);
    this.setState(prevState => ({
      ...prevState,
      ...objValidate,
    }));
    if (objValidate.result) this.props.getResult(objValidate.result);
  };

  render() {
    const { isValid, input, errorMsg } = this.state;
    return (
      <div className="row p-3 justify-content-center">
        <div className="col-md-6 col-sm-7 custom--col">
          <div
            className="error text-center mt-2 mb-3"
            style={isValid ? { display: 'none' } : { display: 'block' }}
          >
            <span>{errorMsg}</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={input}
              onChange={this.handleInput}
              className="form-control"
              type="text"
              placeholder="Input amount of rupiah"
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = 'Input amount of rupiah')}
            />
          </form>
          <p className="instruction text-center mt-3 mb-2">
            Press <strong>enter</strong> to get the results.
          </p>
        </div>
      </div>
    );
  }
}

export default Input;
