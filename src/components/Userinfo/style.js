import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 118px;

  border-top: 1.7px solid var(--color-grey-3);
  border-bottom: 1.7px solid var(--color-grey-3);
  margin-bottom: 18px;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    width: 100%;
    max-width: 900px;
    height: 100%;

    margin: auto;
    padding: 15px;
  }

  p {
    color: var(--color-grey-0);
    font-weight: 600;
    font-size: var(--font-size-3);
  }

  span {
    color: var(--color-grey-1);
    font-weight: 400;
    font-size: var(--font-size-6);
  }

  @media (min-width: 420px) {
    section {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
