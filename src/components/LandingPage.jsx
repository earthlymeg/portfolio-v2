// import "../styles/landingPage.css";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#c8b5a6',


  }
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <CssBaseline/>
      {/* <div className="landing-logo">
        
        <h1>MEG</h1> <br></br>
        <h2>SHULMISTER</h2> <br></br>
        <h3>Full Stack Developer</h3>
      </div> */}
      <Header />
    </div>
  );
}

export default LandingPage;
