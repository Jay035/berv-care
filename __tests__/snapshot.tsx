import Login from '@/app/login/page'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import { render } from '@testing-library/react'

it('should render hero section properly', () => {
  const { container } = render(<HeroSection />)
  expect(container).toMatchSnapshot()
})
it('should render how it works section properly', () => {
  const { container } = render(<HowItWorks />)
  expect(container).toMatchSnapshot()
})