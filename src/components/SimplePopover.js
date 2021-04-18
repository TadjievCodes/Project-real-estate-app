import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="popoverBtn">
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Buy house
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>
          <Typography className={classes.typography}>Please, intert your contact information and we will contact you as soon as possible</Typography>
          <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          </form>
          <div className="popoverSendBtn">
            <Button variant="outlined" color="primary" component={Link} to='/'>
              Contact me
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
}
