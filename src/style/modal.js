import { css } from "styled-components";
import styled from "styled-components";

export const Modalcontainer = styled.section`
  width: 369px;
  height: 342px;

  background: #212529;

  .headerTechs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    padding: 12px 20px;

    width: 369px;
    height: 50px;

    background: #343b41;
  }

  button {
    font-weight: 600;
    font-size: var(--font-size-4);
    line-height: 26px;

    background: transparent;

    color: #868e96;
  }

  h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #f8f9fa;
  }

  form {
    padding: 12px 20px;
  }

  .containerBtn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .updateBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    padding: 0px 22px;

    width: 70%;
    height: 48px;

    font-weight: 500;
    font-size: var(--font-size-4);

    color: var(--color-white);

    background: var(--color-primary-negative);

    border: 1px solid var(--color-primary-negative);
    border-radius: 4px;
  }

  .deleteBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 22px;
    gap: 0.625rem;

    width: 25%;
    height: 48px;

    font-weight: 500;
    font-size: var(--font-size-4);
    line-height: 26px;

    color: var(--color-white);

    background: var(--color-grey-1);

    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
  }

  .registerBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    padding: 0 22px;

    width: 324px;
    height: 48px;

    font-weight: 500;
    font-size: var(--font-size-4);

    color: var(--color-white);

    background: var(--color-primary);

    border: 1px solid var(--color-primary);
    border-radius: 4px;
  }
`;
