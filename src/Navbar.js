import Button from '@material-ui/core/Button';


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