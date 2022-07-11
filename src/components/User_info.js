import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: true,
      name: '',
      age: '',
      number: '',
      email: '',
      
    } 
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
    
  }

  
  onClickBtn = (event) => {
    if (this.state.form) {
      event.preventDefault();
    }
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false })
  }

  render() {
    if (this.state.form) {
    return (
      <div>
        <h1>{this.props.info}</h1>
        <form>
        
        <div> <label htmlFor="name">Name:</label><input id="name" 
        type="text" value={this.state.name} onChange={this.handleChange} placeholder="John Smith">
          </input></div>
        
        <div> <label htmlFor="age">Age:</label>
        <input className='input' id="age" 
        type="number" value={this.state.age} onChange={this.handleChange} placeholder="36">
          </input></div>
        
        <div> <label htmlFor="number">Number:</label><input id="number" 
        type="number" value={this.state.number} onChange={this.handleChange} placeholder="555-555-5555">
          </input></div>

          <div> <label htmlFor="email">Email:</label><input id="email" 
        type="email" value={this.state.email} onChange={this.handleChange} placeholder="smith_guy@gmail.com">
          </input></div>
        
        <button 
        onClick={this.onClickBtn}>Submit</button>
        </form>
       
      </div>
    );
    }
    else {
      return( 
        <div>
          <h1>{this.props.test}</h1>
          <button onClick={this.onClickBtn}>Edit</button>
          <h3>{this.state.name}</h3>
          <h3>{this.state.age}</h3>
          <h3>{this.state.number}</h3>
          <h3>{this.state.email}</h3>
          
        </div>
      )
    }
  }
}

export default Info;
