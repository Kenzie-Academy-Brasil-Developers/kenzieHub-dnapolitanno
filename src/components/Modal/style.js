import styled from "styled-components";

export const HeaderNavTechs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 0.188rem;

    width: 32px;
    height: 32px;

    background: var(--color-grey-3);
    border-radius: 4px;

    font-size: var(--font-size-2);

    color: var(--color-white);
  }
`;
