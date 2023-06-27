import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: {
        backgroundColor: '#4db6ac',
    },
    title: {
        display: 'none',
        paddingLeft: '46%',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}))