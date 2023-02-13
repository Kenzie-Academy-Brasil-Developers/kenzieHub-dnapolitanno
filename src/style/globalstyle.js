import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
        --color-white: #ffffff;
        
        --color-back-modal: rgba(18, 18, 20, 0.5);

        --font-size-0: 1.5rem;
        --font-size-1: 1.375rem;
        --font-size-2: 1.25rem;
        --font-size-3: 1.125rem;
        --font-size-4: 1rem;
        --font-size-5: 0.875rem;
        --font-size-6: 0.75rem;
        --font-size-7: 0.625rem;
        --font-size-8: 0.5rem;
        
        --font-family: 'Inter', sans-serif;

    }

    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: var(--font-family);
        background-color: var(--color-grey-4);
        color: var(--color-grey-0);
    }
`;
