import React, { useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';


export const Picklist = (props) => {
    const {options} = props;
    const testOptions=['test','testOptions']
    const [selectedOption,setSelectedOption] =useState({});
    const animatedComponents = makeAnimated();
    const onchangeHandler=(value) =>{
         setSelectedOption(value);
         props.onChange(value);
    }
    return (
        <>
        <Select
        value={props.value}
        onChange={onchangeHandler}
        options={options}
        isSearchable={true}
        isClearable={true}
        isDisabled={false}
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={props.defaultValue?props.defaultValue:''}
        name=""
        className=""
        classNamePrefix=""
        
      />
      </>
    );
};
/**
 * Reference :https://react-select.com/home
 **/
