import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import copy from './copy.json'

const useStyles = makeStyles({
  header: {
    backgroundColor: 'silver'
  }
})

function App() {
  const headerRef = useRef(null)
  const classes = useStyles()
  const [height, setHeight] = useState(null)

  const setHeaderHeight = () => {
    const { height: headerHeight } = headerRef.current.getBoundingClientRect()
    setHeight(headerHeight)
  }

  useEffect(() => {
    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
  }, [])

  return (
    <Box style={{ paddingTop: height }}>
      <Box
        py={3}
        textAlign="center"
        component="header"
        position="fixed"
        width="100%"
        top="0"
        left="0"
        className={classes.header}
        ref={headerRef}
      >
        <Container>
          <Typography variant="h1">
            Hello from header
          </Typography>
        </Container>
      </Box>

      <Box py={5}>
        <Container>
          {copy.paragraphs.map((item, idx) => (
            <Box mb={3}>
              <Typography variant="body1">{item}</Typography>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
}

export default App;
