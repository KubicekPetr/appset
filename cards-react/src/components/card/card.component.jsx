import './card.component.css';

const Card = () => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src="tree.jpeg" alt="tree" />
            </figure>
        </div>

        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">Neat tree</p>
                <p className="subtitle is-6">@nature</p>
            </div>
            <div className="content">
                Saw this awesome tree during my hike today.
            </div>
        </div>
    </div>
);

export default Card;