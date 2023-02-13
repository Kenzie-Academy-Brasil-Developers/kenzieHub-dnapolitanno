import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.394rem;
  margin-bottom: 1.375rem;

  width: 100%;

  label {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-0);
  }

  input {
    padding: 0 1.0152rem;
    height: 2.375rem;
    width: 100%;

    color: var(--color-grey-1);

    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;

    font-family: var(--font-family);

    &:focus {
      border: 1.2182px solid var(--color-grey-0);
      color: var(--color-grey-0);
    }

    &:focus::placeholder {
      color: var(--color-grey-0);
    }
  }

  @media (min-width: 420px) {
    input {
      width: 100%;
      height: 3rem;
    }
  }
`;
