import React from "react";
import { connect } from "react-redux";
const Home = () => {
  return <div></div>;
};
const mapStateTpProps = (state) => {
  return { dataRedux: state.users };
};
export default connect(mapStateTpProps)(Home);
