import React, { Component } from 'react';

class EditTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: '',
    }
  }
  
 


  render() {
   
  return (<div id='edit_tool' className='fixed top-0 left-0 right-0 flex justify-end align-middle'>
  
      <div className='flex-col'>
        <h2>
        cool
        </h2>
          <button className='btn-sm btn-secondary' id='finishEdit'>Done Editing</button>
      </div>
     
   </div>
  )
    
}}

export default EditTool;