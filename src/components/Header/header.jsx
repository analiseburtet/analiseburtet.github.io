import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ backgroundColor: '#000000', height: '70px', color: '#ffffff' }}>
        <Box display="flex" alignItems="center" style={{ height:'100%' }}>  
            <Box flexGrow={1}>
                <Typography component="h1" >
                    Analise Burtet
                </Typography>
            </Box>
            <Box>
            <Link href="https://github.com/analiseburtet" color="inherit">
              <GitHubIcon/>
            </Link>
            </Box>
            <Box>
              <Link href="https://www.linkedin.com/in/analise-burtet-a8040ba1/" color="inherit">
                <LinkedInIcon/>
              </Link>           
            </Box>    
        </Box>
        </Container>
    </React.Fragment>
  );
}