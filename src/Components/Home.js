import React, { useState, useEffect } from 'react';
import '../ComponentStyles/Home.css';
import InvoiceForm from './InvoiceForm';
import InvoiceTable from './InvoiceTable';
import CustomDialog from '../UsefulTools/CustomDialog';
import InvoiceHeaderForm from './InvoiceHeaderForm';
import { useAppStateVariables } from '../StateContext/AppStateVariablesContext';

export default function Home() {
    const {
        tableRowsContext,
        usersHeaderNameContext,
        usersAddressStreetContext,
        usersAddressStreet2Context,
        usersAddressCityContext,
        usersAddressStateContext,
        usersAddressZipContext,
        billToHeaderNameContext,
        billToAddressStreetContext,
        billToAddressStreet2Context,
        billToAddressCityContext,
        billToAddressStateContext,
        billToAddressZipContext,
    } = useAppStateVariables();

    const [tableRows, setTableRows] = tableRowsContext;
    const [usersHeaderName, setUserHeaderName] = usersHeaderNameContext;
    const [usersAddressStreet, setUsersAddressStreet] = usersAddressStreetContext;
    const [usersAddressStreet2, setUsersAddressStreet2] = usersAddressStreet2Context;
    const [usersAddressCity, setUsersAddressCity] = usersAddressCityContext;
    const [usersAddressState, setUsersAddressState] = usersAddressStateContext;
    const [usersAddressZip, setUsersAddressZip] = usersAddressZipContext;
    const [billToHeaderName, setBillToHeaderName] = billToHeaderNameContext;
    const [billToAddressStreet, setBillToAddressStreet] = billToAddressStreetContext;
    const [billToAddressStreet2, setBillToAddressStreet2] = billToAddressStreet2Context;
    const [billToAddressCity, setBillToAddressCity] = billToAddressCityContext;
    const [billToAddressState, setBillToAddressState] = billToAddressStateContext;
    const [billToAddressZip, setBillToAddressZip] = billToAddressZipContext;

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
            <InvoiceHeaderForm />
            <InvoiceTable tableRows={tableRows} setShowFormDialog={setShowFormDialog} />
            <CustomDialog showDialog={showFormDialog} handleClose={handleFormDialog} title={'Add New Job'} content={<InvoiceForm setShowFormDialog={setShowFormDialog} setTableRows={setTableRows} />}/>
        </div>
    );
}