/* eslint import/no-extraneous-dependencies: 'off', jsx-a11y/anchor-is-valid: 'off' */
// import React from 'react';
import React from 'react';

const About = (content) => {
  const data = content.data.data.content.page.about;
  return (
    <div className="jumbotron" id="about">
      <div className="container">
        <h1>{data.header}</h1>
        <h3>{data.subheader}</h3>
        <p>{data.text}</p>
        <p>{data.forMore} <a href={data.url} data-target="blank">{data.url}</a></p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">{data.goUp}</a></p>
      </div>
    </div>
  );
};

export default About;

/*
class About extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="jumbotron" id="about">
        <div className="container">
          <h1>{data.header}</h1>
          <h3>{data.subheader}</h3>
          <p>{data.text}</p>
          <p>{data.forMore} <a href={data.url} data-target="blank">{data.url}</a></p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{data.goUp}</a></p>
        </div>
      </div>
    );
  }
}
*/
