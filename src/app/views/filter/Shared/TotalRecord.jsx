import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/system';
import { H6 } from 'app/components/Typography';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemStore from '../../../utils/store';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function FullScreenDialog({ regRecord }) {
  // console.log('regRecord', regRecord)

  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

  // FULL SCREEN--------------------------------
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  // ---------------------------------------------------------------------
  const [comp, setComp] = useState('')
  const [reg, setReg] = useState('')
  // const addItem1 = ItemStore((state) => state.addItem1);
  // addItem1({ 'reg_length': regRecord.totalReg, 'comp_length': regRecord.totalComp })
  // console.log('addItems1', { 'reg_length': regRecord.totalReg, 'comp_length': regRecord.totalComp })

  // step3-->> get data ----------for Total Record......
  const { value_r, value_c } = ItemStore();

  console.log('value_r.length', value_r.length)
  console.log('value_c.length', value_c.length)


  return (
    <>
      <Box display="flex" justifyContent="space-evenly">
        {/* <Button onClick={() => myItems('hello')}>click me</Button> */}
        <Box>
          Total Registration
          <br />
          <br />

          <Button
            variant="outlined" color="primary"
            sx={{ width: 150 }}
            // onClick={() => navigate('/filter/TotalRecordDetails')} 
            onClick={() => navigate('/filter/TotalRegistrationDetails', { state: regRecord.totalReg })}
          // onClick={(i) => myItems(i)}
          // onClick={() => navigate(`/filter/TotalRecordDetails/${regRecord.subjectId}/${regRecord.dates}`)}
          >
            {value_r.length}
            {/* {"-"} */}
            {/* {regRecord ? regRecord.totalReg.length : "-"} */}
          </Button>
        </Box>
        {/* <Box>
          Total Competition
          <br />
          <br />
          <Button variant="outlined" color="primary" sx={{ width: 150 }} >
            {regRecord ? regRecord.totalComp.length : "-"}
          </Button>
        </Box> */}

        <Box>
          Total Competition
          <br />
          <br />
          <Button variant="outlined" color="primary" sx={{ width: 150 }}
            onClick={() => navigate('/filter/TotalCompetitionDetails', { state: regRecord.totalComp })}
          >
            {value_c.length}
            {/* {"-"} */}
            {/* {regRecord ? regRecord.totalComp.length : "-"} */}
          </Button>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <H6 sx={{ flex: 1, marginLeft: theme.spacing(2) }}>Sound</H6>
                <Button color="inherit" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>

            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>

              <Divider />

              <ListItem button>
                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
              </ListItem>
            </List>
          </Dialog>
        </Box>

      </Box >
    </>
  );
}

