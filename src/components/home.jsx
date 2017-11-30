/* eslint import/no-extraneous-dependencies: 'off', jsx-a11y/anchor-is-valid: 'off' */
import React from 'react';

const Home = (content) => {
  const data = content.data.data.content.page.home;
  return (
    <div className="jumbotron" id="home">
      <div className="container">
        <h1>{data.header}</h1>
        <p>{data.text}</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">{data.goUp}</a></p>
      </div>
    </div>
  );
};

export default Home;


/*
class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const data = this.props.data.data.content.page.home;
    return (
      <div className="jumbotron" id="home">
        <div className="container">
          <h1>{data.header}</h1>
          <p>{data.text}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{data.goUp}</a></p>
        </div>
      </div>
    );
  }
}
*/
