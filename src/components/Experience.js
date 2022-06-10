import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false,
    }
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn = () => {
    console.log('Button Clicked');
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false})
  }


  render() {
    if (this.state.form) {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <button onClick={this.onClickBtn}>Press</button>
      </div>
    );
    }
    else {
      return( 
        <div>
          <h1>{this.props.test}</h1>
          <button onClick={this.onClickBtn}>Press</button>
          <h2>Form Is False</h2>
        </div>
      )
    }
  }
}

export default Experience;
// submit button logic

// edit button logic

// company name
// position
// main tasks
// start date
// end date