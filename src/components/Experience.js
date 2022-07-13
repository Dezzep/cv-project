import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: true,
      company: 'Company',
      position: 'Position',
      tasks: 'Tasks',
      start: 'Start Date',
      end: 'End Date',
    }
    this.onClickField = this.onClickField.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onClickField = (event) => {
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
      return( 
        <div onClick={this.onClickField} className='bg-secondary-content p-12 border-b-8 border-primary'>
          <h1 className='font-bold text-xl align-center flex'>{this.props.header}</h1>
          <div className='flex-col justify-center align-center mt-6 ml-4'>
            <h3 className='font-bold text-xl'>{this.state.company}</h3>
            <h3 className='font-bold text-lg'>{this.state.position}</h3>
          </div>
          <div className='flex gap-2 ml-4'>
            <h3 className='text-xs'>{this.state.start}</h3>
            <h3 className='text-xs'>{this.state.end}</h3>
          </div>
          <h3 style={{whiteSpace: 'pre-wrap'}} className='mt-6 p-4'>{this.state.tasks}</h3>
         
        </div>
      )
    }
    else {
      return(
      <div className='bg-secondary-content p-12 border-b-8 border-primary w-full'>
        <h1 className='font-bold text-xl'>{this.props.header}</h1>
        <form className='w-full'>
        
        <div className='flex-col justify-center align-center mt-6 ml-4'>
          <div className=''>
            <div className='tooltip tooltip-secondary' data-tip='What company did you work for?'> <label htmlFor="company"></label>
            <input className='' id="company"
            type="text" value={this.state.company} onChange={this.handleChange}  placeholder="Tower Maker inc">
              </input>
            </div>
          </div>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='What was your position at the company'> <label htmlFor="position"></label>
            <input className='' id="position"
            type="text" value={this.state.position} onChange={this.handleChange} placeholder="Cup Stacker">
              </input>
            </div>
          </div>
        </div>
        
        <div className='flex gap-2 ml-4 text-xs'>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='Start date of your job'> <label htmlFor="start"></label>
            <input className='' id="start"
            type="text" value={this.state.start} onChange={this.handleChange} placeholder='2018-05-15'>
              </input>
            </div>
          </div>
          <div>
            <div className='tooltip tooltip-secondary' data-tip='End date of your job'> <label htmlFor="end"></label>
            <input className='' id="end"
            type="text" value={this.state.end} onChange={this.handleChange} placeholder='2019-05-10'>
              </input>
            </div>
          </div>
        </div>
        
        <div className='flex w-screen mt-6 p-4'>
          <div className='tooltip tooltip-secondary form-control w-full' data-tip='What are some things you did at work?'> <label htmlFor="tasks"></label>
          <textarea className='textarea textarea-primary resize rounded-md h-56 w-full' id="tasks"
           value={this.state.tasks} onChange={this.handleChange} placeholder="write some things you did at work">
            </textarea>
          </div>
        </div>
      

        
      </form>

      </div>
      )
    }
  }
}
export default Experience;