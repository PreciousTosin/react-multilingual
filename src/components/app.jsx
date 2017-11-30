/* eslint import/no-extraneous-dependencies: 'off', class-methods-use-this: 'off',
jsx-a11y/anchor-is-valid: 'off', max-len: 'off' */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import SwitchNavRoute from './switch';
import Header from './header';
import actions from './../actions';

const App = (props) => {
  const { content, switchLanguage } = props;
  return (
    <div>
      <Header data={content} switchLanguage={switchLanguage} />
      <div className="container-fluid">
        <h1>ReactJS scaffold</h1>
        <SwitchNavRoute data={content} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  content: state.content,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  switchLanguage: lang => (actions.switchLanguage(lang)),
  changePage: () => push('/about'),
}, dispatch);


App.propTypes = {
  content: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  switchLanguage: PropTypes.func,
};

App.defaultProps = {
  content: {},
  switchLanguage: null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

/*
class App extends Component {
  constructor() {
    super();

    this.state = {
      // pageLoaded: false,
    };
  }

  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    return (
      <div>
        <Header data={content} switchLanguage={switchLanguage} />
        <div className="container-fluid">
          <h1>ReactJS scaffold</h1>
          <SwitchNavRoute data={content} />
        </div>
      </div>
    );
  }
}
*/

/*
export default connect(state => ({ content: state.content }),
  dispatch => ({ switchLanguage: lang => dispatch(actions.switchLanguage(lang)) }))(App);
*/

// export default connect(mapStateToProps, mapDispatchToProps)(App);
