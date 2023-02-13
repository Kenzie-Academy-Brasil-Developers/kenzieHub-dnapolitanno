import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 1rem;

  label {
    font-weight: 400;
    font-size: var(--font-size-6);

    color: var(--color-grey-0);
  }

  select {
    height: 3rem;
    padding: 0 1.0152rem;

    font-family: var(--font-family);

    color: var(--color-grey-1);

    font-weight: 400;
    font-size: var(--font-size-4);

    background: var(--color-grey-2);

    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;

    outline: none;
    cursor: pointer;

    &:focus {
      border: 1.2182px solid var(--color-grey-0);

      color: var(--color-grey-0);
    }
  }
`;
