import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

function NumberTile(props) {
  const { classes, number } = props;

  return (
    <Paper className={classes.paper}>{number}</Paper>
  );
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

export default withStyles(styles)(NumberTile);