import './Card.css';

const Card = ({ title, description, icon }) => {
  return (
    <div className="feature">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;