import Hashtag from "./Hashtag";

function TheLine() {
  let array = [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
  ];

  return (
    <p className="theLine">
      {array.map((item, iteration) => {
        return <Hashtag key={iteration} />;
      })}
    </p>
  );
}

export default TheLine;
