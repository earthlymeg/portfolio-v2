import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/MenuOpen';
const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: 1,
    },
    icon: {
        fontSize: '2rem'
    }
}))


function Header(){
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar>
            <h1 className={classes.appbarTitle}>Meg Shulmister</h1>
            <MenuIcon/>
           
            </Toolbar>
        </AppBar>
    )
}

export default Header; 