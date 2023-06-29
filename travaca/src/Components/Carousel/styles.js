import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  
  list: {
    height: '75vh', 
    overflow: 'auto',
    width: '4rem'
  },
}));