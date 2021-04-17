import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { grey, lightBlue, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    backgroundColor: '#4B6858',
    textAlign: "center",
    color: '#ffffff',
    justifyContent: 'center',
  },
  media: {
    margin: 'auto',
    height: 'auto',
    width: '50%',
    paddingTop: '56.25%', // 16:9
    borderRadius: '50%',
  },
  button: {
     margin: 'auto', 
  }
}));

export default function RealtorCard({realtor}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={realtor.name}
        subheader={realtor.dateEmployed}
      />
      <CardMedia
        className={classes.media}
        image={realtor.image}
      />
      <CardContent>
        <Typography variant="body2" component="p">
         {realtor.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" color="primary">
            See Properties
        </Button>
      </CardActions>
    </Card>
  );
}