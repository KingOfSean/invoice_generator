import React, { useState, useEffect } from 'react';
import {useGlobalFunctions} from "../StateContext/GlobalFunctionsContext";

export default function InvoiceTable({ tableRows, setShowFormDialog, }) {
    const {
        priceFormatter,
    } = useGlobalFunctions();

    const grandTotal = tableRows.reduce(
        (sum, row) => sum + (parseFloat(row.total) || 0),
        0
    );

    useEffect(() => {
        console.log('InvoiceTable mounted');
        // your effect logic here
    }, [tableRows]);

    return (
        <div>
            <table className='table table-bordered table-striped table-hover align-table-text-center'>
                <thead className="tableHead">
                    <tr>
                        <th>Description of Work</th>
                        <th>Date</th>
                        <th className="wd-20">Hours</th>
                        <th className="wd-220">Rate</th>
                        <th className="wd-220">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableRows.map((row) => {
                            return(
                                <tr>
                                    <td>{row.description}</td>
                                    <td className='text-center'>{row.date}</td>
                                    <td className='text-center'>{row.hours}</td>
                                    <td className='text-center'>{priceFormatter(row.rate)}</td>
                                    <td className='text-center'>{priceFormatter(row.total)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan="3"></td>
                        <td className="fw-bold">Total</td>
                        <td className="fw-bold">{priceFormatter(grandTotal)}</td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-ameripro-red' onClick={() => setShowFormDialog(true)}>Add New Job</button>
        </div>
    );
}