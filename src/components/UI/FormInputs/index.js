import Password from "./Password";
import SelectList from "./SelectList";
import TextInput from "./TextInput";

export const Inputs=(props)=>{
    let dispFormCont = null;
    switch(props.fieldType) {
        case 'TextInput' :
            dispFormCont = <TextInput {...props} />;
            break;
        case 'Password':
            dispFormCont= <Password {...props}/>
            break;
        case 'SelectList':
            dispFormCont= <SelectList {...props}/>
            break;
        case 'MultiSelectList':
            dispFormCont= <SelectList {...props}/>
            break;
        // case 'TextArea':
        //     dispFormCont= <SelectList {...props}/>
        //     break;				
        default :
            dispFormCont = <TextInput {...props} />;	
    }
   return(
    <>
        {dispFormCont}
    </>
   );
}