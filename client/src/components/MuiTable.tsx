import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material'

export const MuiTable = () => {
  return <TableContainer component={Paper}>
    <Table aria-label='simple table'> 
        <TableHead></TableHead>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align='center'>Email</TableCell>
        </TableRow>
        <TableBody>
            {
                tableData.map(row => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
  </TableContainer>
}

const tableData = [
    {
    "id": 1,
    "first_name": "Biddie",
    "last_name": "Gundry",
    "email": "bgundry0@hugedomains.com",
    "gender": "Female",
    "ip_address": "42.255.80.135"
  }, {
    "id": 2,
    "first_name": "Helenelizabeth",
    "last_name": "Stenett",
    "email": "hstenett1@trellian.com",
    "gender": "Female",
    "ip_address": "207.112.62.119"
  }, {
    "id": 3,
    "first_name": "Mateo",
    "last_name": "Billing",
    "email": "mbilling2@amazon.de",
    "gender": "Male",
    "ip_address": "190.127.59.132"
  }, {
    "id": 4,
    "first_name": "Nicoline",
    "last_name": "Asbrey",
    "email": "nasbrey3@vistaprint.com",
    "gender": "Female",
    "ip_address": "161.5.184.220"
  }, {
    "id": 5,
    "first_name": "Hazlett",
    "last_name": "Jannaway",
    "email": "hjannaway4@techcrunch.com",
    "gender": "Male",
    "ip_address": "27.247.244.81"
  }, {
    "id": 6,
    "first_name": "Bridget",
    "last_name": "Waterhouse",
    "email": "bwaterhouse5@issuu.com",
    "gender": "Female",
    "ip_address": "128.137.45.47"
  }, {
    "id": 7,
    "first_name": "Jazmin",
    "last_name": "Kiffin",
    "email": "jkiffin6@eepurl.com",
    "gender": "Female",
    "ip_address": "49.54.103.166"
  }, {
    "id": 8,
    "first_name": "Gothart",
    "last_name": "Jordi",
    "email": "gjordi7@huffingtonpost.com",
    "gender": "Male",
    "ip_address": "113.176.23.222"
  }, {
    "id": 9,
    "first_name": "Alfreda",
    "last_name": "Ragdale",
    "email": "aragdale8@ucla.edu",
    "gender": "Polygender",
    "ip_address": "74.159.85.233"
  }, {
    "id": 10,
    "first_name": "Audrey",
    "last_name": "Cumber",
    "email": "acumber9@theglobeandmail.com",
    "gender": "Female",
    "ip_address": "197.55.60.148"
  }]