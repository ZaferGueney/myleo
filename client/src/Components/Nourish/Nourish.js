import React from "react";
import "./Nourish.scss";

function Nourish(props) {
  return props.trigger ? (
    <div className="nourish">
      <div className="nourish-inner">
        <h1>NOURISH</h1>
        <button onClick={() => props.setNourishPop(false)}>CLOSE</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          reiciendis iure voluptatibus a corporis? Illo dicta obcaecati, sit ab,
          modi cum fugiat cupiditate, voluptatibus ratione odio est sapiente
          voluptate autem.
        </p>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Nourish;
