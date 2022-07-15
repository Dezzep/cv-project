const EditTool = () => {
   
  const hideEditTools = () => {
    document.getElementById('edit_tool').style.display='none'
  }
  return (
      <div className='mt-2 w-full'>
        <button onClick={hideEditTools}className='btn-sm md:btn-md text-black hover:bg-lime-500 bg-secondary w-full font-bold text-md' id='finishEdit'>Finished Editing</button>
      </div>
  )}
export default EditTool;