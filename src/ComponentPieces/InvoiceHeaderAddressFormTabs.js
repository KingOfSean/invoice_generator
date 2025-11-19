import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import UserAddressForm from "./UserAddressForm";
import BillToAddressForm from "./BillToAddressForm";
import { useAppStateVariables } from "../StateContext/AppStateVariablesContext";

export default function InvoiceHeaderAddressFormTabs() {
    const {
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
  const [tab, setTab] = useState('user-info');

  // Unpack the actual states & setters
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

  const [disabled, setDisabled] = useState(true);

  const handleTabChange = (event, newValue) => {
      event.preventDefault();
      setTab(newValue);
  }

  const handleDisabled = () => {
  const allFilled =
    usersHeaderName !== '' &&
    usersAddressStreet !== '' &&
    usersAddressCity !== '' &&
    usersAddressState !== '' &&
    usersAddressZip !== '' &&
    billToHeaderName !== '' &&
    billToAddressStreet !== '' &&
    billToAddressCity !== '' &&
    billToAddressState !== '' &&
    billToAddressZip !== '';

  setDisabled(!allFilled);
};


  useEffect(() => {
    handleDisabled();
  }, [
    usersHeaderName,
    usersAddressStreet,
    usersAddressCity,
    usersAddressState,
    usersAddressZip,
    billToHeaderName,
    billToAddressStreet,
    billToAddressCity,
    billToAddressState,
    billToAddressZip,
  ])

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs variant="fullWidth" value={tab} onChange={handleTabChange} centered>
        <Tab label="Your Info"  value="user-info"/>
        <Tab label="Bill To" value="bill-info" />
      </Tabs>

      {/* TAB 1 */}
      <div className="mt-3" style={{ display: tab === "user-info" ? "flex" : "none" }} >
        <UserAddressForm
          usersHeaderName={usersHeaderName}
          setUserHeaderName={setUserHeaderName}
          usersAddressStreet={usersAddressStreet}
          setUsersAddressStreet={setUsersAddressStreet}
          usersAddressStreet2={usersAddressStreet2}
          setUsersAddressStreet2={setUsersAddressStreet2}
          usersAddressCity={usersAddressCity}
          setUsersAddressCity={setUsersAddressCity}
          usersAddressState={usersAddressState}
          setUsersAddressState={setUsersAddressState}
          usersAddressZip={usersAddressZip}
          setUsersAddressZip={setUsersAddressZip}
        />
      </div>

      {/* TAB 2 */}
      <div className="mt-3" style={{ display: tab === "bill-info" ? "flex" : "none" }} >
        <BillToAddressForm
          billToHeaderName={billToHeaderName}
          setBillToHeaderName={setBillToHeaderName}
          billToAddressStreet={billToAddressStreet}
          setBillToAddressStreet={setBillToAddressStreet}
          billToAddressStreet2={billToAddressStreet2}
          setBillToAddressStreet2={setBillToAddressStreet2}
          billToAddressCity={billToAddressCity}
          setBillToAddressCity={setBillToAddressCity}
          billToAddressState={billToAddressState}
          setBillToAddressState={setBillToAddressState}
          billToAddressZip={billToAddressZip}
          setBillToAddressZip={setBillToAddressZip}
        />
      </div>

      <button disabled={disabled} className="btn btn-ameripro-blue">Create</button>
    </Box>
  );
}
