import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
// import SortIcon from '@material-ui/core/Sort';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
}))


function Header(){
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar>
              <h1>My Portfolio</h1>
              <IconButton>
                  {/* <SortIcon /> */}
              </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header; 