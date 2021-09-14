
import "../styles/App.css"

const MapeoPaises = props =>{
    const {img, name, capital} = props;
    return (
        <div className="mapeo">
            <img className="mapeo-img" src={img} alt={name}/>
            <div className="info-pais" >
                <div>
                    
                    <p>pais:</p>
                    <p>{name}</p>

                </div>
                <div>
                    <p>capital:</p>
                    <p>{capital}</p>
                </div>
            </div>
        </div> 
    );
};

export default MapeoPaises;