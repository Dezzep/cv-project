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
  
      <div className='mt-2 w-full'>
        
            <button onClick={this.hideEditTools}className='btn-sm btn-warning' id='finishEdit'>Done Editing</button>
      </div>
     
   
  )
    
}}
export default EditTool;