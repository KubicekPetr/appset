import './card.component.css';

const Card = ({ title, imageUrl, userName, content }) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={imageUrl} alt="tree" />
            </figure>
        </div>

        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">@{userName}</p>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    </div>
);

export default Card;