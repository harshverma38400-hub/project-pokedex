import { Link } from 'react-router-dom';
import './Pokemon.css';

function Pokemon({ name,image,id}){
// Link ak page sa dusra page p tranfar krnak kam krta hai 
    return (
        
       <div className="poke-baby">
        <Link to={`/pokemon/${id}`}>             
        <div className='poke-name'>{name} </div>
        <div>
            <img className='poke-baby-img ' src={image} />
        </div>
        </Link>
         
        </div>
    
     );
}
export default Pokemon