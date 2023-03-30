import React, {useState, forwardRef} from 'react'
import {Snackbar, Button, Alert, AlertProps} from '@mui/material'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAltert(props ,ref) {
    return <Alert elevation={6} ref={ref} {...props} />
  }
)

export const MuiSnackBar = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if(reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
    <Button onClick={() => setOpen(true)}>Submit</Button>
    <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
      <SnackbarAlert onClose={handleClose} severity='success'>
      Form submitted successfully!
      </SnackbarAlert>
    </Snackbar> 
    </>
  )}

 {/* <Snackbar message='Form submitted successfully!' autoHideDuration={1500} open={open} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'center'}}     /> */}
    {/* {/* {/* <Snackbar open={open} autoHideDuration={1500} onClose{handleClose}> */}