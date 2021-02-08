import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Navbar = () => {
  return ( 
    <div>
      
    

      <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-200%, -200%)'
    }}
>
  <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>



    
    </div>
   );
}
 
export default Navbar;