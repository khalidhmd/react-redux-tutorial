import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";

function CakeContainer(props) {
  const [text, setText] = useState(1);
  return (
    <div>
      <h1>Number of Cackes: {props.cake}</h1>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(text)}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cake: state.cake.cake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (num) => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
