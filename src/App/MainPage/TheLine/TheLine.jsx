import Hashtag from "./Hashtag";
import './TheLine.scss';

function TheLine() {
  const array = Array(24).fill("#");

  return (
    <p className="line">
      {array.map((item, iteration) => {
        return <Hashtag key={iteration} />;
      })}
    </p>
  );
}

export default TheLine;
