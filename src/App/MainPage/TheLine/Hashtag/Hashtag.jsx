import { useState } from "react";

function Hashtag() {
  const [style, setStyle] = useState({ color: "rgb(246, 245, 239)" });

  return (
    <b
      style={style}
      onMouseOver={() => {
        setStyle({ color: "rgb(220, 78, 78)" });
      }}
      onMouseLeave={() => {
        setStyle({ color: "rgb(246, 245, 239)" });
      }}
    >
      #
    </b>
  );
}

export default Hashtag;
