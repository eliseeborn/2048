import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import NumberTile from './number_tile';

function GameGrid(props) {
  const { classes, matrix } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={24}>
          {matrix.map((number) => (<Grid item xs={3}>
            <NumberTile number={number} />
          </Grid>))}
        </Grid>
      </Card>
    </div>);
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyItems: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
  }
});

export default withStyles(styles)(GameGrid);