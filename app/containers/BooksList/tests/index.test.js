import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import BooksList from '../index';

describe('<BooksList />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BooksList />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
