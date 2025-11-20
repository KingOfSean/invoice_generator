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
  const [disabled, setDisabled] = useState(true);

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

  const handleDisabled = () => {
    const allFilled =
      jobDate !== null &&
      jobDescription !== '' &&
      hoursWorked !== '' &&
      hourlyRate !== '';

    setDisabled(!allFilled);
  }

  useEffect(() => {
    handleDisabled()
  }, [
      jobDate,
      jobDescription,
      hoursWorked,
      hourlyRate,
    ]
  )

  return (
    <form onSubmit={handleCreateJob}>
      <div className='invoice-inputs-main-container'>
        <div className='d-flex gap-3 flex-wrap'>
          <div className='invoice-inputs-small'>
            <CustomDatePicker
              label="Job Date"
              value={jobDate}
              handleChange={handleJobDate}
            />
          </div>
          <div className='invoice-inputs-small'>
            <TextField
              label="Hours Worked"
              className="invoice-hours-worked"
              type="number"
              value={hoursWorked}
              onInput={handleHoursWorked}
              variant="outlined"
              size='small'
              fullWidth
            />
          </div>
          <div className='invoice-inputs-small'>
            <PriceFormatInput 
              label="Hourly Rate"
              value={hourlyRate}
              handleValueChange={handleHourlyRatePrice}
            />
          </div>
        </div>
        <div className='align-self-stretch'>
          <div className=''>
            <TextField
              label="Job Description"
              className="invoice-job-description"
              value={jobDescription}
              onInput={handleJobDescription}
              variant="outlined"
              size='small'
              fullWidth
            />
          </div>
        </div>
        <button
        disabled={disabled}
          type="submit"
          className="btn btn-ameripro-blue align-self-stretch"
        >
          Add Job
        </button>
      </div>
    </form>
  );
}
