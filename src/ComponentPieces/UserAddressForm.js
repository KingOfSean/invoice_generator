import React from "react";
import { TextField, Box } from "@mui/material";

export default function UserAddressForm({
  usersHeaderName,
  setUserHeaderName,
  usersAddressStreet,
  setUsersAddressStreet,
  usersAddressStreet2,
  setUsersAddressStreet2,
  usersAddressCity,
  setUsersAddressCity,
  usersAddressState,
  setUsersAddressState,
  usersAddressZip,
  setUsersAddressZip,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Your Name / Header"
        size="small"
        fullWidth
        value={usersHeaderName}
        onChange={(e) => setUserHeaderName(e.target.value)}
      />

      <TextField
        label="Street Address"
        size="small"
        fullWidth
        value={usersAddressStreet}
        onChange={(e) => setUsersAddressStreet(e.target.value)}
      />

      <TextField
        label="Street Address 2"
        size="small"
        fullWidth
        value={usersAddressStreet2}
        onChange={(e) => setUsersAddressStreet2(e.target.value)}
      />

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          label="City"
          size="small"
          fullWidth
          sx={{ flex: 2 }}
          value={usersAddressCity}
          onChange={(e) => setUsersAddressCity(e.target.value)}
        />

        <TextField
          label="State"
          size="small"
          sx={{ width: 90 }}
          value={usersAddressState}
          onChange={(e) => setUsersAddressState(e.target.value)}
        />

        <TextField
          label="ZIP"
          size="small"
          sx={{ width: 120 }}
          value={usersAddressZip}
          onChange={(e) => setUsersAddressZip(e.target.value)}
        />
      </Box>
    </Box>
  );
}
