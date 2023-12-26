import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export const MultiSelect2=()=>{
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value:'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    const [selected, setSelected] = useState(options);
    return (
        <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            hasSelectAll={true}
            ClearIcon
            isLoading={false}
        />
    )
}
/**
 * Reference :https://github.com/hc-oss/react-multi-select-component
 **/
