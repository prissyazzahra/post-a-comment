import { CardWrapper } from "./style";

const Card = ({ title, content }) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <div className="content">
        <p>{content}</p>
      </div>
    </CardWrapper>
  );
}

export default Card;