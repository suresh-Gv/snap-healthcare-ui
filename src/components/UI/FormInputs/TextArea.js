export const TextArea = (props) => {
  return (
    <>
      <textarea 
      name={props.name?props.name:''} 
      rows={6} 
      cols={40}
      className={props.className?props.className:''}
      onChange={(e)=>props.changeHandler(e.target.value,e)}
      placeholder={props.placeholder?props.placeholder:''}

      />
    </>
  );
};
