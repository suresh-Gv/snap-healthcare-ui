import Password from "./Password";
import { Picklist } from "./Picklist";
import TextInput from "./TextInput";

export const Inputs=(props)=>{
    let dispFormCont = null;
    console.log('inputField',props.fieldType);
    switch(props.fieldType) {
        case 'TextInput' :
            dispFormCont = <TextInput {...props} />;
            break;
        case 'Password':
            dispFormCont= <Password {...props}/>
            break;
            case 'Picklist':
            dispFormCont= <Picklist {...props}/>
            break;				
        default :
            dispFormCont = <TextInput {...props} />;	
    }
   return(
    <>
        {dispFormCont}
    </>
   );
}