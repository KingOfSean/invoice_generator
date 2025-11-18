import React, { useState, useEffect } from 'react';
import {useGlobalFunctions} from "../StateContext/GlobalFunctionsContext";

export default function InvoiceTable({ tableRows, setShowFormDialog, }) {
    const {
        priceFormatter,
    } = useGlobalFunctions();

    useEffect(() => {
        console.log('InvoiceTable mounted');
        // your effect logic here
    }, [tableRows]);

    return (
        <div>
        <table className='table table-bordered table-striped table-hover'>
            <thead className="tableHead">
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th className="wd-20">Hours</th>
                    <th className="wd-220">Rate</th>
                    <th className="wd-220">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableRows.map((row) => {
                        return(
                            <tr>
                                <td>{row.date}</td>
                                <td>{row.description}</td>
                                <td>{row.hours}</td>
                                <td>{priceFormatter(row.rate)}</td>
                                <td>{priceFormatter(row.total)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button onClick={() => setShowFormDialog(true)}>Add New Job</button>
        </div>
    );
}