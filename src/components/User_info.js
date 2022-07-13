import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: true,
      name: 'Name',
      location: 'Location',
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
         
          <h3 className='font-bold text-4xl py-6 ml-12 pt-8'>{this.state.name}</h3>
          <div className='flex mt-6 gap-12 justify-evenly py-4 bg-accent-content text-accent'>
            
          <h3>{this.state.email}</h3>
          <h3>{this.state.number}</h3> 
          <h3>{this.state.location}</h3>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='bg-primary-content'>
          
          <form>
          
          <div className='font-bold text-4xl py-6 ml-12 pt-8'>
            <div className='tooltip tooltip-secondary' data-tip='Enter your full name'> <label htmlFor="name"></label>
            <input className='' id="name"
            type="text" value={this.state.name} onChange={this.handleChange} placeholder="John Smith">
              </input></div>
          </div>
          
          <div  className='flex mt-6 gap-12 justify-evenly py-4 bg-accent-content text-accent'>
        

          <div>
                <div className='tooltip tooltip-secondary' data-tip='enter your email address'> <label htmlFor="email"></label>
                <input className='text-center w-56' id="email"
                          type="text" value={this.state.email} onChange={this.handleChange} placeholder="smith_guy@gmail.com">
                </input></div>
              </div>
            
            <div>
              <div className='tooltip tooltip-secondary' data-tip='enter your phone number'>
                <label htmlFor="number"></label><input className='text-center w-56' id="number"
              type="text" value={this.state.number} onChange={this.handleChange} placeholder="555-555-5555">
                </input></div>
            </div>
             
              
              <div>
              <div className='tooltip tooltip-secondary' data-tip='Where do you live?'> <label htmlFor="location"></label>
              <input className='text-center w-56' id="location"
              type="text" value={this.state.location} onChange={this.handleChange} placeholder="Montreal">
                </input></div>
            </div>
          </div>
          </form>
         
        </div>
      );
    }
  }
}

export default Info;
