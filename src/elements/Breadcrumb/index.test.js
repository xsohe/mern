import React from 'react';
import { rende } from '@testing-library/react';
import Breadcrumb from './index';
import { BrowserRouter as Router } from 'react-router-dom';

const setup = () => {
  const breadcrumblist = [
    { pageTitle: 'Home', pageHref: '' },
    { pageTitle: 'House Details', pageHref: '' },
  ];
  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumblist} />
    </Router>
  );
  const breadcrumb = container.querySelector(`.breadcrumb`);

  return {
    breadcrumb,
  };
};

test('Should have <ol> with className .breadcrumb and have text Home & House Details', () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent('Home');
  expect(breadcrumb).toHaveTextContent('House Details');
});
