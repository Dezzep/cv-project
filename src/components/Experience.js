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
        <div onClick={this.onClickField} className='bg-secondary-content'>
          <h1>{this.props.test}</h1>
          <h3>{this.state.company}</h3>
          <h3>{this.state.position}</h3>
          <h3>{this.state.tasks}</h3>
          <h3>{this.state.start}</h3>
          <h3>{this.state.end}</h3>
        </div>
      )
    }
    else {
      return(
      <div>
        <h1>{this.props.test}</h1>
        <form>
        <div>
          <div className='tooltip tooltip-secondary' data-tip='What company did you work for?'> <label htmlFor="company"></label>
          <input className='text-center' id="company"
          type="text" value={this.state.company} onChange={this.handleChange}  placeholder="Tower Maker inc">
            </input>
          </div>
        </div>
        <div>
          <div className='tooltip tooltip-secondary' data-tip='What was your position at the company'> <label htmlFor="position"></label>
          <input className='text-center' id="position"
          type="text" value={this.state.position} onChange={this.handleChange} placeholder="Cup Stacker">
            </input>
          </div>
        </div>
        <div>
          <div className='tooltip tooltip-secondary' data-tip='What are some things you did at work?'> <label htmlFor="tasks"></label>
          <textarea className='text-center' id="tasks"
           value={this.state.tasks} onChange={this.handleChange} placeholder="write some things you did at work">
            </textarea>
          </div>
        </div>
        <div>
          <div className='tooltip tooltip-secondary' data-tip='Start date of your job'> <label htmlFor="start"></label>
          <input className='text-center' id="start"
          type="text" value={this.state.start} onChange={this.handleChange} placeholder='2018-05-15'>
            </input>
          </div>
        </div>
        <div>
          <div className='tooltip tooltip-secondary' data-tip='End date of your job'> <label htmlFor="end"></label>
          <input className='text-center' id="end"
          type="text" value={this.state.end} onChange={this.handleChange} placeholder='2019-05-10'>
            </input>
          </div>
        </div>

        <div>
        </div>
      </form>

      </div>
      )
    }
  }
}
export default Experience;