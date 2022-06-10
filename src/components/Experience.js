import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: true,

      formValues: {
        
      }
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
        <form>
          
        </form>
        <button onClick={this.onClickBtn}>Submit</button>
      </div>
    );
    }
    else {
      return( 
        <div>
          <h1>{this.props.test}</h1>
          <button onClick={this.onClickBtn}>Edit</button>
          <h2>The rendered Content!</h2>
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