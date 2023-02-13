import { css } from "styled-components";
import styled from "styled-components";

export const maincontainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.375rem;

  width: 100vw;
  height: 100vh;

  h1 {
    width: max-content;

    margin-bottom: 20px;

    font-size: var(--font-size-2);

    color: var(--color-primary);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 18px;
    gap: 1.125rem;

    width: 90%;
    height: max-content;

    background: var(--color-grey-3);
    border-radius: 3px;
  }

  h3 {
    font-weight: 700;
    font-size: var(--font-size-3);
    line-height: 22px;

    color: var(--color-grey-0);
  }

  p {
    font-weight: 400;
    font-size: var(--font-size-6);

    color: var(--color-grey-1);
  }

  .btnLogin {
    padding: 0px 16px;

    width: 330px;
    height: 48px;

    font-size: var(--font-size-4);

    color: var(--color-grey-0);

    background: var(--color-grey-2);

    border: 1px solid var(--color-primary);
    border-radius: 4px;

    background: var(--color-primary);
  }

  span {
    font-weight: 600;
    font-size: var(--font-size-6);
    line-height: 18px;

    color: var(--color-grey-1);
  }

  .btnRouteRegister {
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

    background: var(--color-grey-1);

    border: 1.2182px solid var(--color-grey-1);
    border-radius: 4px;
  }

  .btnRouteRegister:hover {
    background: var(--color-grey-2);
    border: var(--color-grey-2);
  }

  @media (min-width: 420px) {
    section {
      width: 369px;
      height: max-content;

      padding: 42px 22px;
    }

    h1 {
      margin-bottom: 20px;

      font-size: 1.625rem;

      color: var(--color-primary);
    }

    span {
      margin-top: 12px;
    }

    .btnRouteRegister {
      height: 3rem;
      width: 100%;
    }
  }
`;

export const Mainlogin = styled.main`
  justify-content: center;

  ${maincontainer}
`;

export const Mainregister = styled.main`
  padding: 1.875rem 0;

  ${maincontainer}

  h1 {
    margin: 0;
  }

  h3 {
    font-weight: 700;
    font-size: var(--font-size-3);

    color: var(--color-grey-0);
  }
`;
