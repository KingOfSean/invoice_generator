import React, { useState, useEffect } from 'react';
import '../ComponentStyles/Home.css';
import InvoiceForm from './InvoiceForm';
import InvoiceTable from './InvoiceTable';
import CustomDialog from '../UsefulTools/CustomDialog';

export default function Home() {
    const [tableRows, setTableRows] = useState([]);
    const [showFormDialog, setShowFormDialog] = useState(false);

    const handleFormDialog = () => {
        setShowFormDialog(false)
    }

    useEffect(() => {
        console.log('Home mounted');
        // your effect logic here
    }, []);

    return (
        <div id='mainHomeLayout'>
            <InvoiceTable tableRows={tableRows} setShowFormDialog={setShowFormDialog} />
            <CustomDialog showDialog={showFormDialog} handleClose={handleFormDialog} title={'Creat Job Row'} content={<InvoiceForm setShowFormDialog={setShowFormDialog} setTableRows={setTableRows} />}/>
        </div>
    );
}