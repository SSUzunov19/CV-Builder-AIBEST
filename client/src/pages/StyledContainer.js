// StyledContainer.js
import React from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "2rem",
  height: "840px",
  width: "594px",
  transition: "all .2s",
  '@media (min-width:768px)': {
    width: "594px",
    height: "840px",
  },
});

const StyledContainer = React.forwardRef((props, ref) => {
  return <Container ref={ref} {...props} />
});

export default StyledContainer;
