import React, { Component } from 'react';

class EditTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: '',
    }
    this.hideEditTools = this.hideEditTools.bind(this);
  }
  hideEditTools () {
    document.getElementById('edit_tool').style.display='none'
  }
  render() {
   
  return (
  
      <div className='flex-col'>
        <h2>
        Edit Tools
        </h2>
          <div className='flex'>
            <button onClick={this.hideEditTools}className='btn-sm btn-secondary' id='finishEdit'>Done Editing</button>
          </div>
      </div>
     
   
  )
    
}}
export default EditTool;