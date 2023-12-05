import { createTheme } from '@mui/material/styles';
import { app_theme } from '../global_theme/global_theme';

const material_ui_theme = createTheme({
    palette: {
        primary: {
            main: app_theme.primaryColor,
        },
        secondary: {
            main: app_theme.secondaryColor,
        },
    },
});

export default material_ui_theme;
