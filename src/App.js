import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './styles_&_themes/global_theme/global_theme.css';
import { ThemeProvider } from '@mui/material';
import material_ui_theme from './styles_&_themes/material_ui_theme/material_ui_theme';
import { Router_App } from './config/router_config';
import '@fontsource/inter';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={material_ui_theme}>
      <Router_App />
      </ThemeProvider>
    </Provider>
  )
}

export default App