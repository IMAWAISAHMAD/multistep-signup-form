import React,{FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import {ConfirmPageProps} from '../types';


const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));


export const Confirm:FC<ConfirmPageProps> = ({ formData, prevStep, nextStep,handleReset }) => {
  const classes = useStyles();
  const { firstName, lastName, email, profession, city, bio } = formData;
  return (
    <>
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={firstName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Last Name'
              secondary={lastName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Email'
              secondary={email}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Profession'
              secondary={profession}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='City'
              secondary={city}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Bio'
              secondary={bio}
              className={classes.textCenter}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => handleReset()}
          >
            Reset
          </Button>
          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default Confirm;