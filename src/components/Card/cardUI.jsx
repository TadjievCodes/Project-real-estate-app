import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: '#07090F',
    textAlign: "center",
    color: '#ffffff',
    justifyContent: 'center',
    borderRadius: '10%',
  },
  media: {
    margin: 'auto',
    height: 'auto',
    width: '50%',
    paddingTop: '56.25%',
    borderRadius: '50%',
  },
  button: {
     margin: 'auto', 
     color: '#ffffff',
  }
}));

export default function RealtorCard({realtor}) {
  // card template for realtor data
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={realtor.name}
        />
      <Typography variant="body2" component="p">
        {realtor.dateEmployed}
        </Typography>
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
        <Button href="/search" className={classes.button} variant="contained" color="primary">
            <div style={{color: "#ffffff"}}>See Properties</div>
        </Button>
      </CardActions>
    </Card>
  );
}