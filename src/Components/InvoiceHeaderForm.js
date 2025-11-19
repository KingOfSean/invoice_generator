import React, { useState, useEffect } from 'react';
import CustomDialog from '../UsefulTools/CustomDialog';
import InvoiceHeaderAddressFormTabs from '../ComponentPieces/InvoiceHeaderAddressFormTabs';

export default function InvoiceHeaderForm({ handleSubmit }) {
    const [headerAddressDialog, setHeaderAddressDialog] = useState(false);

    useEffect(() => {
        console.log('InvoiceHeaderForm mounted');
        // your effect logic here
    }, []);

    return (
        <div>
            <button 
                className="btn btn-ameripro-red"
                onClick={() => setHeaderAddressDialog(true)}
            >
                Add Header Address Details
                </button>
            <CustomDialog
                showDialog={headerAddressDialog}
                handleClose={() => setHeaderAddressDialog(false)}
                title="Header Address Details"
                content={
                    <InvoiceHeaderAddressFormTabs />
                }
            />
        </div>
    );
}