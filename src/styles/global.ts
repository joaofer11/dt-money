import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    html {
        height: 100%;
        height: -webkit-fill-avaiable;
    }

    body {
        width: 100%;
        height: 100%;

        min-height: 100vh;
        min-height: -webkit-fill-available;
        min-height: -moz-available;

        -webkit-font-smoothing: antialiased;
        
        color: ${props => props.theme['gray-100']};
        background-color: ${props => props.theme['gray-800']};
    }


    body, input, textarea, button {
        font: 400 1.6rem 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    #root {
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
`
