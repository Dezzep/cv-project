import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: true,
      school: 'School',
      program: '',
      startDate: '',
      endDate: '',
    }
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClickBtn = () => {
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false})
  }
  handleChange(event) { //--
    this.setState({[event.target.id]: event.target.value})
  }


  render() {
    if (this.state.form) {
    return (
      <div className='bg-secondary'>
        <h1>{this.props.test}</h1>
        <h1 onClick={this.onClickBtn}>{this.state.school}</h1>
      </div>
    );
    }
    else {
      return( 
        <div>
          <h1>{this.props.test}</h1>
          <div> <label htmlFor="school"></label>
          <input className='text-center p-0 m-0' id="school" 
        type="text" value={this.state.school} onChange={this.handleChange}  placeholder="The Final Empire">
          </input>
        </div>
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