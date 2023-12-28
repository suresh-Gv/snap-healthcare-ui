import React, { useState } from 'react';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { TextField } from '@mui/material'; 

export const DemoDatePicker = () => {
  const [datePickEnabled, setDatePickEnabled] = useState(false);
  const [format, setFormat] = useState('MM/DD/YYYY');
  const [selectedDate, setSelectedDate] = useState(null);

  const renderDatePicker = () => {
    const datePickerChangeHandler = (date) => {
      setSelectedDate(date);
      console.log("datePickerChangeHandler", selectedDate);
    }
console.log('selectedDate', selectedDate);
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <MobileDatePicker
        // className='form-control form-control-fields'
          open={datePickEnabled}
          onClose={() => setDatePickEnabled(false)}
          onChange={(e)=>datePickerChangeHandler(e)}
          value={selectedDate}
          format={format}
          onOpen={() => setDatePickEnabled(true)}
          autoFocus={true}
          // TextFieldComponent={(props) => (
          //   <input
          //     value={selectedDate ? dayjs(selectedDate).format(format) : ''}
          //     className='form-control form-control-fields'
          //     onClick={() => setDatePickEnabled(!datePickEnabled)}
          //     disabled
          //   />
          // )}
           
        />
      </LocalizationProvider>
    );
  };

  return (
    <>
      <input 
        // type="date"
        value={selectedDate}
        // format={format} 
        className='form-control form-control-fields' 
        onClick={() => setDatePickEnabled(!datePickEnabled)} 
      />
      {datePickEnabled ? renderDatePicker() : <></>}
    </>
  );
};
