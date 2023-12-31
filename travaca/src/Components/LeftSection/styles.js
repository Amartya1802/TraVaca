import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    main_txt: {
        color: '#1b5e20',
        padding: theme.spacing(11, 5, 6),
        // backgroundColor: '#673ab7'
    },

    info_txt: {
      padding: theme.spacing(1, 6, 8)
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#c8e6c9',
        // backgroundColor: 'blue',
        '&:hover': { backgroundColor: '#81c784' },
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

      loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      },
      container: {
        padding: '25px',
      },
      marginBottom: {
        marginBottom: '30px',
      },
      list: {
        height: '75vh', overflow: 'auto',
      },
}))