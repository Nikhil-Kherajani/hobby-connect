import image from './images.jpg'
import './card.css'

function Card(){
    return (
        <> <div className="card-content">
            <div className="card mb-3">
                <img src={image} className="card-img-top" alt="sorry" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
        </>
    );
}

export default Card