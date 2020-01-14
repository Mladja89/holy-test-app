/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from 'redux';

import BooksList from '../../containers/BooksList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

import GlobalStyle from '../../global-styles';

import { mapStateToProps } from '../../utils/mapStateToProps';
import { DAEMON } from '../../utils/constants';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { loadBooks, onSelectChange } from './actions';
import '../../globalstyles.scss'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      placeholder: 'https://via.placeholder.com/400x250',
    }
  }

  componentDidMount() {
    this.props.initialize();
  }

  handleChange(evt) {
    const { target: { value } } = evt;
    this.setState({
      selected: value
    })
  }

  render() {
    const { books: { selectedRow } } = this.props;

    return (<Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={12} sm={9}>
          <BooksList {...this.props} />
        </Grid>

        <Grid item xs={12} sm={3}>
          {selectedRow ? (
            <Box className={"book-preview"}>
              <div className={'preview-top'}>
                <div>{selectedRow.name}</div>
                <div>{selectedRow.writer}</div>
              </div>
              <img src={this.state.placeholder}></img>
              <div className={'preview-bottom'}>
                <div>Title: {selectedRow.name}</div>
                <div>Year: {selectedRow.yearOfPublishing}</div>
                <div>Pages: {selectedRow.numberOfPages}</div>
                <div>Quantity: {selectedRow.quantity}</div>
                <div>Author name: {selectedRow.writer}</div>
                <div>Author's Date of Birth: {selectedRow.dateOfBirth}</div>
              </div>
            </Box>)
            : null}

        </Grid>
      </Grid>
      <GlobalStyle />
    </Container>)
  };
}

function handleChange(e) {
  console.log('❤❤❤', e.target.value)
}

const mapDispatchToProps = (dispatch) => ({
  initialize: params => {
    dispatch(loadBooks(params));
  },
  onChangeSelect: params => {
    this.setState({ corgi: 'abc' })
    dispatch(onSelectChange(params));
  }
});

export default compose(
  injectSaga({ key: 'App', saga, mode: DAEMON }),
  connect(mapStateToProps, mapDispatchToProps),
)(App);
