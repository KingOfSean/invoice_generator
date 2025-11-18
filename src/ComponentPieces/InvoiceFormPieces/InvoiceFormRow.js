import React, { useState, useEffect } from 'react';
import "../../ComponentStyles/InvoiceForm.css";
import { TextField } from "@mui/material";
import PriceFormatInput from '../../UsefulTools/PriceFormatInput';

export default function InvoiceFormRow() {
  const [jobDescription, setJobDescription] = useState('');
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);


  const handleJobDescription = (e) => {
    setJobDescription(e.target.value);
  }

  const handleHoursWorked = (e) => {
    setHoursWorked(e.target.value);
  }

  const handleHourlyRatePrice = (values) => {
    setHourlyRate(values.value);
  }

  useEffect(() => {
    const hours = parseFloat(hoursWorked) || 0;
    const rate = parseFloat(hourlyRate) || 0;
    setTotalAmount(hours * rate);
  }, [hoursWorked, hourlyRate]);

  return (
    <div className='invoice-inputs'>
      <TextField
        required
        className="invoice-job-description"
        variant="outlined"
        label="Job Description"
        value={jobDescription}
        onInput={handleJobDescription}
        size='small'
      />
      <TextField
        label="Hours Worked"
        className="invoice-hours-worked"
        type="number"
        variant="outlined"
        value={hoursWorked}
        onInput={handleHoursWorked}
        size='small'
      />
      <PriceFormatInput 
        label="Hourly Rate"
        value={hourlyRate}
        handleValueChange={handleHourlyRatePrice}
      />
      <PriceFormatInput 
        label="Total Amount"
        value={totalAmount}
        // handleValueChange={handleHourlyRatePrice}
        readOnly={true}
      />
    </div>
  );
}