import Select from 'react-select';
import makeAnimated from 'react-select/animated';


export const MultiSelect=(props)=>{
  const {value,options} = props;
     const handleChange = (value) => {
        props.onChange(value);
      };
      const animatedComponents = makeAnimated();

    return (
        <>
        <Select
        value={value}
        onChange={handleChange}
        isMulti
        options={options}
        isClearable={true}
        defaultValue={props.defaultValue?props.defaultValue:''}
        isSearchable={true}
        isLoading={false}
        isDisabled={false}
        closeMenuOnSelect={false}
        components={animatedComponents}

        />
        </>
    );
}
/**
 * Reference :https://react-select.com/home
 **/
