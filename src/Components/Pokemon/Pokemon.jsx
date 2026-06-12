import './Pokemon.css';

function Pokemon({ name,image}){

    return (
        
       <div className="poke-baby">
        
        <div className='poke-name'>{name} </div>
        <div>
            <img className='poke-baby-img ' src={image} /></div>
        </div>
     );
}
export default Pokemon