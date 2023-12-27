import Checkbox from "./Checkbox";
import { DatePicker } from "./DatePicker";
import Password from "./Password";
import PhoneNumber from "./PhoneNumber";
import SelectList from "./SelectList";
import TextInput from "./TextInput";

export const Inputs = (props) => {
  let dispFormCont = null;
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
    // case 'TextArea':
    //     dispFormCont= <SelectList {...props}/>
    //     break;
    default:
      dispFormCont = <TextInput {...props} />;
  }
  return <>{dispFormCont}</>;
};
