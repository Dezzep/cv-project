import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: true,
      company: '',
      position: '',
      tasks: '',
      start: '',
      end: '',
    }
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClickBtn = (event) => {
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false})
    event.preventDefault();
   
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }


  render() {
    if (this.state.form) {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <form>
        <div> <label htmlFor="company">Company Name:</label><input id="company" 
        type="text" value={this.state.company} onChange={this.handleChange}  placeholder="The Final Empire">
          </input>
        </div>
        
        <div> <label htmlFor="position">Position:</label><input id="position" 
        type="text" value={this.state.position} onChange={this.handleChange} placeholder="TaskMaster">
          </input>
        </div>  

        <div> <label htmlFor="tasks">Tasks:</label><textarea id="tasks" 
         value={this.state.tasks} onChange={this.handleChange} placeholder="write some things you did at work">
          </textarea>
        </div>  

        <div> <label htmlFor="start">Start Date:</label><input id="start" 
        type="date" value={this.state.start} onChange={this.handleChange}>
          </input>
        </div>  
        
        <div> <label htmlFor="end">End Date:</label><input id="end" 
        type="date" value={this.state.end} onChange={this.handleChange}>
          </input>
        </div>  

        <div>
        </div>
          
          <button onClick={this.onClickBtn}>Submit</button>          
        </form>

      </div>
    );
    }
    else {
      return( 
        <div>
          <h1>{this.props.test}</h1>
          <button onClick={this.onClickBtn}>Edit</button>
          <h3>{this.state.company}</h3>
          <h3>{this.state.position}</h3>
          <h3>{this.state.tasks}</h3>
          <h3>{this.state.start}</h3>
          <h3>{this.state.end}</h3>

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