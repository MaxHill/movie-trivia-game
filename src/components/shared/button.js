import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "linear-gradient(to right, #8360c3, #2ebf91);" : "white"};
  color: ${props => props.primary ? "white" : "linear-gradient(to right, #8360c3, #2ebf91);"};

  opacity: ${props => props.disabled ? ".2" : "1"};
  cursor: ${props => props.disabled ? "default" : "pointer"};

  font-size: 1em;
  font-family: "Arial Rounded MT Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  margin: 1em 0;
  padding: 0.75em 1.5em;
  border: 0;
  border-radius: 3px;
`;
