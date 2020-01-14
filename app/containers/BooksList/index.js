/*
 * BooksList
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MaterialTable from 'material-table';

import { selectRow } from './actions';

import Paper from '@material-ui/core/Paper';
import { displayDate } from '../../utils/formatters/datetime';
import { mapStateToProps } from '../../utils/mapStateToProps';
import { DAEMON } from '../../utils/constants';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';

const BooksList = props => {
  const {
    books: { books, currentlySending: loadingBooks }
  } = props;

  if (!books.length || loadingBooks) {
    return 'Loading...';
  }

  const remappedBooks = books.map(book => {
    const BOOK = {
      ...book,
      writer: book.writer.name,
      dateOfBirth: displayDate(book.writer.dob),
    };
    const extendableBook = Object.assign({}, BOOK, { id: '' });

    return extendableBook;
  });

  var authorLookup = {}
  const tempObjUniqes = props.books.uniqueNames.map(author => author.writer.name)
  for (let key in tempObjUniqes) {
    authorLookup[tempObjUniqes[key]] = tempObjUniqes[key]
  }

  const [state, setState] = React.useState({
    columns: [
      {
        field: 'name',
        title: 'Title',
        filtering: false,
      },
      {
        field: 'writer',
        title: 'Author',
        lookup: {...authorLookup}
      },
      {
        field: 'yearOfPublishing',
        title: 'Year',
        type: 'numeric',
        filtering: false,
      },
      {
        field: 'numberOfPages',
        title: 'Number of pages',
        type: 'numeric',
        filtering: false,
      },
      {
        field: 'quantity',
        title: 'Quantity',
        type: 'numeric',
        filtering: false,
      },
    ],
    data: remappedBooks,
    tableRef: React.createRef(),
  });

  return (
    <Paper elevation={0}>
      <MaterialTable
        title="Books"
        columns={state.columns}
        data={state.data}
        tableRef={state.tableRef}
        onRowClick={(e, data) => props.selectRow(data)}
        options={{
          filtering: true
        }}
      />
    </Paper>
  );
}

const mapDispatchToProps = dispatch => ({
  selectRow: params => {
    dispatch(selectRow(params));
  }
});

export default compose(
  injectSaga({ key: 'BooksList', saga, mode: DAEMON }),
  connect(mapStateToProps, mapDispatchToProps),
)(BooksList);
