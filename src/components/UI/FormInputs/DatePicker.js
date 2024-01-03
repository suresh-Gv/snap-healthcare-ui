import * as React from 'react';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { unstable_useDateField as useDateField } from '@mui/x-date-pickers/DateField';
import { isSet } from '../../../utils/commonUtils';
import { useClearableField } from '@mui/x-date-pickers/hooks';
import moment from 'moment';
import dayjs from 'dayjs'; // Import dayjs library


const BrowserField = React.forwardRef((props, ref) => {
  const {
    disabled,
    id,
    label,
    inputRef,
    InputProps: { ref: containerRef, startAdornment, endAdornment } = {},
    // extracting `error`, 'focused', and `ownerState` as `input` does not support those props
    error,
    focused,
    ownerState,
    sx,
    ...other
  } = props;

  const handleRef = useForkRef(containerRef, ref);

  return (
    <Box
      sx={{ ...(sx || {}), display: 'flex', alignItems: 'center' }}
      id={id}
      ref={handleRef}
    >
      {startAdornment}
      <input disabled={disabled} ref={inputRef} {...other} className='form-control form-control-fields'  />
      {endAdornment}
    </Box>
  );
});

const BrowserDateField = React.forwardRef((props, ref) => {
  const { inputRef: externalInputRef, slots, slotProps, ...textFieldProps } = props;

  const {
    onClear,
    clearable,
    ref: inputRef,
    ...fieldProps
  } = useDateField({
    props: textFieldProps,
    inputRef: externalInputRef,
  });

  /* If you don't need a clear button, you can skip the use of this hook */
  const { InputProps: ProcessedInputProps, fieldProps: processedFieldProps } =
    useClearableField({
      onClear,
      clearable,
      fieldProps,
      InputProps: fieldProps.InputProps,
      slots,
      slotProps,
    });
  return (
    <BrowserField
      ref={ref}
      inputRef={inputRef}
      {...processedFieldProps}
      InputProps={ProcessedInputProps}
    />
  );
});

const BrowserDatePicker = React.forwardRef((props, ref) => {
  return (
    <DatePicker
      ref={ref}
      {...props}
      slots={{ field: BrowserDateField, ...props.slots }}
    />
  );
});

 const DatePick = (props) =>{
  
  const {value,changeHandler} = props;
  const onChangeHandler = (_e,e)=>{
    const formattedDate = dayjs(_e).format('DD/MM/YYYY');
    changeHandler(formattedDate,e);
    // console.log('ee',formattedDate);
  }
  const reverseFormattedDate = (formattedDate) => {
    let momentDate = '';
    try{
      momentDate = moment(formattedDate, 'DD/MM/YYYY');
    }catch(e){

    }
    return momentDate;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserDatePicker
        slotProps={{
          field: { clearable: true },
        }}
        value={reverseFormattedDate(value)}
        onChange={(v,e) =>onChangeHandler(v,e) }
      />
    </LocalizationProvider>
  );
}
export default  DatePick;