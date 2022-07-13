import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: true,
      school: 'School',
      program: 'Program',
      startDate: 'Start Date',
      endDate: 'End Date',
    }
    this.onClickField = this.onClickField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  onClickField = () => {
    this.state.form === false ? this.setState({ form: true }) : this.setState({ form: false})
    document.getElementById('edit_tool').style.display=''
    document.getElementById('finishEdit').addEventListener('click', () => {
      this.setState({form:true})
    });
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
  render() {
    if (this.state.form) {
    return (
      <div onClick={this.onClickField} className='bg-secondary p-12 border-b-8 border-primary'>
        <h1 className='text-xl font-bold align-center flex'>{this.props.header}</h1>
        
        <div className='flex-col justify-center align-center mt-6 ml-4'>
          <h1 className='font-bold text-xl'>{this.state.school}</h1>
          <h1 className='font-bold text-lg'>{this.state.program}</h1>
        </div>
        
        <div className='flex gap-2 ml-4 text-xs'>
          <h1>{this.state.startDate}</h1>
          <h1>{this.state.endDate}</h1>
        </div>
      </div>
    );
    }
    else {
      return( 
        <div className='bg-secondary p-12 border-b-8 border-primary'>
                  <h1 className='text-xl font-bold'>{this.props.header}</h1>

          <div className='flex-col justify-center align-center mt-6 ml-4'>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='Name of your school'>
            
                <label htmlFor="school"></label>
                <input className=' font-bold text-xl' id="school"
                        type="text" value={this.state.school} onChange={this.handleChange}  placeholder="St Josephines Highschool and Gym">
                </input>
              </div>
            </div>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='What did you study'>
                <label htmlFor="program"></label>
                <input className='font-bold text-lg' id="program"
                        type="text" value={this.state.program} onChange={this.handleChange}  placeholder="Computer Sciences">
                </input>
              </div>
            </div>
          </div>
          <div className='flex gap-2 ml-4 text-xs'>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='Date you started your schooling'>
                <label htmlFor="startDate"></label>
                <input className='text-center p-0 m-0' id="startDate"
                        type="text" value={this.state.startDate} onChange={this.handleChange}  placeholder="Start Date">
                </input>
              </div>
            </div>
            <div>
              <div className='tooltip tooltip-secondary' data-tip='Date you ended your schooling'>
                <label htmlFor="endDate"></label>
                <input className='text-center p-0 m-0' id="endDate"
                        type="text" value={this.state.endDate} onChange={this.handleChange}  placeholder="End Date">
                </input>
              </div>
          </div>
          </div>
        </div>

      )
    }
  }
}

export default Education