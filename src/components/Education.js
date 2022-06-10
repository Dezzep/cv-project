import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: true,
    }
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn = () => {
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false})
  }


  render() {
    if (this.state.form) {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <button onClick={this.onClickBtn}>Submit</button>
      </div>
    );
    }
    else {
      return( 
        <div>
          <h1>{this.props.test}</h1>
          <button onClick={this.onClickBtn}>Edit</button>
          <h2>Form Is False</h2>
        </div>
      )
    }
  }
}

export default Education;
// submit button logic

// edit button logic

// school name
// title of study
// date of study