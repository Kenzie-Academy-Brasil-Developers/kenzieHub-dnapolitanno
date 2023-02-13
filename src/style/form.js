import styled from "styled-components";

export const Forms = styled.form`
  width: 100%;
  height: max-content;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    padding: 0px 16px;

    height: 2.375rem;
    width: 100%;

    font-weight: 500;
    font-size: var(--font-size-4);

    color: var(--color-grey-0);

    background: var(--color-primary);

    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;
  }

  button:hover {
    background: var(--color-primary-focus);

    border: 1.2182px solid var(--color-primary-focus);
  }

  @media (min-width: 420px) {
    button {
      width: 100%;
      height: 3rem;
    }
  }
`;
