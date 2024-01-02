import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";
import Password from "./Password";
import PhoneNumber from "./PhoneNumber";
import SelectList from "./SelectList";
import TextArea  from "./TextArea";
import TextInput from "./TextInput";

 const FormInputs = (props) => {
  const {type} = props;
  switch (type) {
    case "TextInput":
      return <TextInput {...props} />;
    case "Checkbox":
        return <Checkbox {...props} />;
    case "Password":
      return <Password {...props} />; ;
    case "SelectList":
      return <SelectList {...props} />; ;
    case "MultiSelectList":
      return <SelectList {...props} />; ;
    case "Date":
      return <DatePicker {...props} />; ;
    case "Phone":
      return <PhoneNumber {...props} />; ;
     case 'TextArea':
        return <TextArea {...props}/> ;
    default:
      return <TextInput {...props} />;
  }
};

export default FormInputs;