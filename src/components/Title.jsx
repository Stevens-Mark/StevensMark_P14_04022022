import styled from 'styled-components'
import PropTypes from 'prop-types'
/**
 * CSS for the component using styled.components
 */
 const Span = styled.div`
  padding-top: 1rem;
  text-align: center;

  i {
    font-size: 2.5rem;
  }
  h2 {
    margin: 0.5rem 0rem;
  }
`;

/**
 * Renders a Title on a page
 * @function Title
 * @returns {JSX}
 */
 const Title = ( { heading } ) => {
  return (
    <Span>
      <i className="fa fa-user-circle"></i>
     <h2>{heading}</h2>
     </Span> 
  )
}

export default Title

// Prototypes
Title.propTypes = {
  heading: PropTypes.string.isRequired,
}