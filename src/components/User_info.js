import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: true,
      name: '',
      age: '',
      number: '',
      
    } 
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleChangeAge(event) {
    this.setState({age: event.target.value})
    
  }
  handleChangeNumber(event) {
    this.setState({number: event.target.value})
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
        <h1>{this.props.test}</h1>
        <form>
        
        <div> <label htmlFor="input-name">Name:</label><input id="input-name" 
        type="text" value={this.state.name} onChange={this.handleChangeName}>
          </input></div>
        
        <div> <label htmlFor="input-age">Age:</label><input id="input-age" 
        type="number" value={this.state.age} onChange={this.handleChangeAge}>
          </input></div>
        
        <div> <label htmlFor="input-number">Number:</label><input id="input-number" 
        type="number" value={this.state.number} onChange={this.handleChangeNumber}>
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
          
        </div>
      )
    }
  }
}

export default Info;
