import React, { useState } from "react";
import AsyncSelect from "react-select/async";

export const AsyncSelect = (props) => {
  const options = props.options;
  const [isLoading, setIsLoading] = useState(false);
  const asyncSelectOnChange = (e) => {
    console.log("asyncSelectOnChange", e);
  };
  const loadOptions = async (inputValue, callback) => {
    try {
      setIsLoading(true);
      let url = props.url + "/" + inputValue;
      console.log(url);
      const response = await fetch(url, callback);
      //dummydata
      let dummydata = [
        { label: " label1", value: "value1" },
        { label: " label2", value: "value2" },
        { label: " label3", value: "value3" },
        { label: " label4", value: "value4" },
      ];
      callback(dummydata);
    } catch (error) {
      callback([]);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <AsyncSelect
        cacheOptions
        onChange={(e) => asyncSelectOnChange(e)}
        loadOptions={loadOptions}
        defaultOptions={options}
        isLoading={isLoading}
        //  value={""}
      />
    </>
  );
};
/**
 * Reference :https://react-select.com/home#async
 **/
