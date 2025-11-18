import React, { useState, useEffect } from 'react';
import "../ComponentStyles/InvoiceForm.css";
import { TextField } from "@mui/material";
import PriceFormatInput from '../UsefulTools/PriceFormatInput';
import CustomDatePicker from '../UsefulTools/CustomDatePicker';

export default function InvoiceForm({ setShowFormDialog, setTableRows, }) {
  const [jobDate, setJobDate] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleJobDate = (newDate) => {
    setJobDate(newDate)
  }

  const handleJobDescription = (e) => {
    setJobDescription(e.target.value);
  }

  const handleHoursWorked = (e) => {
    setHoursWorked(e.target.value);
  }

  const handleHourlyRatePrice = (values) => {
    setHourlyRate(values.value);
  }

  const resetInputs = () => {
    setJobDate(null);
    setJobDescription('');
    setHoursWorked('');
    setHourlyRate('');
  }

  const handleCreateJob = (e) => {
    e.preventDefault();
    setTableRows(prev => {
      const nextId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      const hours = parseFloat(hoursWorked) || 0;
      const rate = parseFloat(hourlyRate) || 0;
      const jobTotal = hours * rate;
      const jobRow = { 
          id: nextId,
          date: jobDate ? jobDate.format('DD-MMM-YY') : '',
          description: jobDescription,
          hours: hoursWorked,
          rate: hourlyRate,
          total: jobTotal,
        };

      return [
        ...prev, 
        jobRow
      ];
    });
    resetInputs();
    setShowFormDialog(false);
  }

  return (
    <form onSubmit={handleCreateJob}>
      <div className='invoice-inputs'>
        <CustomDatePicker
          label="Job Date"
          value={jobDate}
          handleChange={handleJobDate}
        />
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
        {/* <PriceFormatInput 
          label="Total Amount"
          value={totalAmount}
          // handleValueChange={handleHourlyRatePrice}
          readOnly={true}
        /> */}
      </div>

      <button
        type="submit"
        className="btn btn-ameripro-blue"
      >
        Add Job
      </button>
    </form>
  );
}
