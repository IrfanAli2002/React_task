const root = document.documentElement;
const theme = getComputedStyle(root);

export const app_theme = {
    primaryColor: theme.getPropertyValue('--primary-color'),
    primaryColorLight: theme.getPropertyValue('--primary-color-light'),
    secondaryColor: theme.getPropertyValue('--secondary-color'),
    errorColor: theme.getPropertyValue('--error-color'),
    errorColorLight: theme.getPropertyValue('--error-color-light'),
    
    
    gradientGreenDark: theme.getPropertyValue('--gradient-green-dark'),
    gradientGreenLight: theme.getPropertyValue('--gradient-green-light')
}
