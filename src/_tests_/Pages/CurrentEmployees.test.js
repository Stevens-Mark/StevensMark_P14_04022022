// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// imort component
import CurrentEmployees from '../../pages/CurrentEmployees'

describe('CreateEmployees', () => {
  it('should render without crashing', async () => {
    render(<CurrentEmployees />)
  })
})