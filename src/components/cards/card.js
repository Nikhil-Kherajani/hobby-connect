import image from './images.jpg'
import './card.css'

function Card(){
    return (
        <> <div className="card-content">
            <div className="card mb-3">
                <img src={image} className="card-img-top" alt="sorry" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        
                    </div>
                </div>
                </div>
        </>
    );
}

export default Card
