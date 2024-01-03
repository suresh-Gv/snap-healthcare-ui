
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import ButtonList from "./ButtonList";
import DropDownButton from "./DropDownButton";

 const Buttons = (props) => {
  const {type} = props;
  switch (type) {
    case "Single":
      return <Button {...props} />;
    case "BtnList":
      return <ButtonList {...props} />;
    case "BtnGroup":
        return <ButtonGroup {...props} />;
    case "DropDown":
      return <DropDownButton {...props} />;
    default:
      return <Button {...props} />;
  }
};

export default Buttons;