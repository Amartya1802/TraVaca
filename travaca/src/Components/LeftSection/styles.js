import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    main_txt: {
        color: 'blue',
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.secondary.light, 0.25),
        // backgroundColor: 'blue',
        '&:hover': { backgroundColor: alpha(theme.palette.secondary.light, 0.65) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
      },

      searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
      },

      inputRoot: {
        color: 'inherit',
      },

      inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
      },

      formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
      },

      formControl2: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
      },
}))