import { render } from '@testing-library/react';
import { Main } from '.';

describe(`Main Page`, () => {
  it(`should render Welcome to React.js`, () => {
    const { getByText } = render(<Main />);

    const welcome = getByText(/Welcome/i).textContent;

    expect(welcome).toBe(`Welcome to React.js`);
  });
});
