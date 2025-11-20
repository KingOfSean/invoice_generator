import React, { useState, useEffect } from 'react';
import './ComponentStyles/Home.css';
import { useAppStateVariables } from '../StateContext/AppStateVariablesContext';
import InvoiceForm from './InvoiceForm';
import InvoiceTable from './InvoiceTable';
import CustomDialog from './UsefulTools/CustomDialog';
import CustomTitleDivider from './UsefulTools/CustomTitleDivider';
import InvoiceHeaderForm from './InvoiceHeaderForm';
import InvoiceFooterForm from './InvoiceFooterForm';

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
        <div className='px-2 px-sm-5 w-100 d-flex flex-column'>
            <div className='d-flex flex-column gap-3'>
                <CustomTitleDivider title={'Invoice Header'} titleColor={'#22356f'} fontSize={'1.7rem'} />
                <InvoiceHeaderForm />
                <CustomTitleDivider title={'Invoice Jobs'} titleColor={'#22356f'} fontSize={'1.7rem'} />
                <InvoiceTable tableRows={tableRows} setTableRows={setTableRows} setShowFormDialog={setShowFormDialog} />
                <CustomTitleDivider title={'Invoice Footer'} titleColor={'#22356f'} fontSize={'1.7rem'} />
                <InvoiceFooterForm />
                <CustomDialog showDialog={showFormDialog} handleClose={handleFormDialog} title={'Add New Job'} content={<InvoiceForm setShowFormDialog={setShowFormDialog} setTableRows={setTableRows} />}/>
            </div>
        </div>
    );
}