import Checkbox from "./Checkbox";
import { DatePicker } from "./DatePicker";
import Password from "./Password";
import PhoneNumber from "./PhoneNumber";
import SelectList from "./SelectList";
import { TextArea } from "./TextArea";
import TextInput from "./TextInput";

 const FormInputs = (props) => {
  let dispFormCont = null;
  console.log('propsfieldType',props);
  switch (props.fieldType) {
    case "TextInput":
      dispFormCont = <TextInput {...props} />;
      break;
    case "Checkbox":
        dispFormCont = <Checkbox {...props} />;
        break;
    case "Password":
      dispFormCont = <Password {...props} />;
      break;
    case "SelectList":
      dispFormCont = <SelectList {...props} />;
      break;
    case "MultiSelectList":
      dispFormCont = <SelectList {...props} />;
      break;
    case "Date":
      dispFormCont = <DatePicker {...props} />;
      break;
    case "Phone":
      dispFormCont = <PhoneNumber {...props} />;
      break;
     case 'TextArea':
        dispFormCont= <TextArea {...props}/>
      break;
    default:
      dispFormCont = <TextInput {...props} />;
  }
  return <>{dispFormCont}</>;
};

export default FormInputs;