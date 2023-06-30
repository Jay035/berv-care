import Login from '@/app/login/page'
import Home from '@/app/page'
import { render } from '@testing-library/react'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

// it('renders login page unchanged', () => {
//   const { container } = render(<Login />)
//   expect(container).toMatchSnapshot()
// }) 