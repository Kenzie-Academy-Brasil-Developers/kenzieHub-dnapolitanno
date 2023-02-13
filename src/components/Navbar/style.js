import styled from "styled-components";

export const NavbarContainer = styled.section`
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: auto;

  padding: 25px 15px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    width: max-content;

    font-size: var(--font-size-2);

    color: var(--color-primary);
  }

  a {
    background: var(--color-grey-3);

    border: none;

    width: 16px;
    height: 16px;
    padding: 14px;
    border-radius: 4px;

    font-weight: 600;
    font-size: var(--font-size-6);

    color: var(--color-grey-0);

    cursor: pointer;

    transition: all 0.3s;
  }

  a:hover {
    background: var(--color-grey-2);
  }
`;
