import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: true,
      name: 'Name',
      age: 'Age',
      number: 'Number',
      email: 'Email',
      
    } 
    this.onClickField = this.onClickField.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
    
  }

  
  onClickField = (event) => {
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false })
    document.getElementById('edit_tool').style.display=''
    document.getElementById('finishEdit').addEventListener('click', () => {
      this.setState({form:true})
    });
  }

  render() {
    if (this.state.form) {
      return( 
        <div onClick={this.onClickField} className='bg-primary-content'>
          <h1 className='font-bold text-xl'>{this.props.header}</h1>
          <h3>{this.state.name}</h3>
          <h3>{this.state.age}</h3>
          <h3>{this.state.number}</h3>
          <h3>{this.state.email}</h3>
        </div>
      )
    }
    else {
      return (
        <div>
          <h1 className='font-bold text-xl'>{this.props.header}</h1>
          <form>
          
          <div> <label htmlFor="name"></label>
          <input className='text-center' id="name" 
          type="text" value={this.state.name} onChange={this.handleChange} placeholder="John Smith">
            </input></div>
          
          <div> <label htmlFor="age"></label>
          <input className='text-center' id="age" 
          type="text" value={this.state.age} onChange={this.handleChange} placeholder="36">
            </input></div>
          
          <div> 
            <label htmlFor="number"></label><input className='text-center' id="number" 
          type="text" value={this.state.number} onChange={this.handleChange} placeholder="555-555-5555">
            </input></div>
  
            <div> <label htmlFor="email"></label>
            <input className='text-center' id="email" 
          type="text" value={this.state.email} onChange={this.handleChange} placeholder="smith_guy@gmail.com">
            </input></div>
          </form>
         
        </div>
      );
    }
  }
}

export default Info;
