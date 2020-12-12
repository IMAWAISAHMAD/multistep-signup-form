import React,{FC} from 'react';
import { makeStyles,Button } from '@material-ui/core';
import {SuccessPageProps} from '../types';
const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center'
  }
}));

export const Success:FC<SuccessPageProps> = ({handleReset}) => {
  const classes = useStyles();
  return (
    <div className={classes.textCenter}>
      <h1>Thank You For Your Submission</h1>
      <Button
        color='secondary'
        variant='contained'
        onClick={() => handleReset()}
        >
        Go Home
      </Button>
    </div>
  );
};
export default Success;