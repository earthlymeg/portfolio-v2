import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders Meg Shulmister header', () => {
  render(<Header />);
  const linkElement = screen.getByTestId('h3-name');
  expect(linkElement).toHaveTextContent('Meg Shulmister')
});





test(`Renders Hello I'm Meg Shulmister`, () => {
  render(<Header />);
  const linkElement = screen.getByTestId('h1-intro');
  expect(linkElement).toHaveTextContent(`Hello,I'm Meg Shulmister`)
});


test(`Renders intro paragraph`, () => {
  render(<Header />);
  const linkElement = screen.getByTestId('p-intro');
  expect(linkElement).toHaveTextContent(`I'm a full-stack software engineer based in Rollinsville, Colorado. Thanks for stopping by.`)
});

test(`href on email button is accurate`, () => {
  render(<Header />);
  const linkElement = screen.getByTestId('email-btn');
  
  // console.log(linkElement)
  expect(linkElement).toHaveAttribute('href', 'mailto:meganshulmister@gmail.com')
  console.log(linkElement)
});

// test(`href on github button is accurate`, () => {
//   render(<Header />);
//   const linkElement = screen.getByTestId('github-btn');
//   expect(linkElement).toHaveTextContent(`I'm a full-stack software engineer based in Rollinsville, Colorado. Thanks for stopping by.`)
// });

// test(`href on linkedin button is accurate`, () => {
//   render(<Header />);
//   const linkElement = screen.getByTestId('linkedin-btn');
//   expect(linkElement).toHaveTextContent(`I'm a full-stack software engineer based in Rollinsville, Colorado. Thanks for stopping by.`)
// });