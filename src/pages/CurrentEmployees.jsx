import React, { useEffect } from 'react'
import { useSelector,
  //  useStore 
  } from 'react-redux'
// for styling
import styled from 'styled-components'
import colors from '../styles/colors'
// import selectors
import { selectEmployees, selectTheme } from '../Redux/selectors'
// import components
import Title from '../components/Title'
import EmployeesTable from '../components/Table/EmployeesTable'
import LoadingIcon from '../utils/loader/loadingIcon'

/**
 * CSS for the component using styled.components
 */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

const IsError = styled.p`
  color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.chromeBlue}`)};
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-top: -10px;
`;

/**
 * Renders the 'CurrentEmployees Page' 
 * @function CurrentEmployees
 * @returns {JSX}
 */
const CurrentEmployees = () => {
 
  useEffect(() => {
    document.title = 'HRNet | Current Employees'
  }, [])

  // retrieve Redux state
  const theme = useSelector(selectTheme) 
  const { isLoading,  isError, employees } = useSelector(selectEmployees)

  return (
    <main>  
      {isLoading ? <Wrapper>          {/* Show load spinner whilst waiting for data */}
                      <LoadingIcon />
                    </Wrapper> : 
        <React.Fragment>
          {isError ? <Wrapper>        {/* Display error message if there is a problem fetcthing the  data*/}
                        <IsError theme={theme}>Something went wrong, Please try again later...<br/></IsError>
                      </Wrapper> : 
            <React.Fragment>
              <Title heading="Current Employees" />   {/* Otherwise display employees information */}
              <EmployeesTable employees={employees}/>         
            </React.Fragment>
          }
        </React.Fragment>
      }  
    </main>
  )
}

export default CurrentEmployees

