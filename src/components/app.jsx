import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import MainTemplate from './templates/MainTemplate/mainTemplate';
import muitTheme from './theme/muiTheme';

const App = () => {
  return (
    <MuiThemeProvider theme={muitTheme}>
      <MainTemplate />
    </MuiThemeProvider>
  )
}

export default App;