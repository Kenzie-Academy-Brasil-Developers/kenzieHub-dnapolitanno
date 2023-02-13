import styled from "styled-components";

export const Headerform = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 1rem;

    font-weight: 600;
    font-size: var(--font-size-6);
    text-align: center;

    background: var(--color-grey-3);
    border-radius: 4px;

    width: 4.25rem;
    height: 2.5rem;

    color: var(--color-grey-0);
  }

  a:hover {
    background: var(--color-grey-2);
  }

  @media (min-width: 420px) {
    width: 369px;
  }
`;
