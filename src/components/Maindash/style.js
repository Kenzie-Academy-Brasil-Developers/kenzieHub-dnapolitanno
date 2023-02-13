import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: auto;

  padding: 15px;
`;

export const Usertec = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: max-content;

    padding: 0 0 5px 0;

    color: var(--color-white);

    font-size: 28px;

    background: var(--color-grey-3);
    border-radius: 4px;
  }

  button:hover {
    background: var(--color-grey-2);
  }

  h3 {
    font-weight: 600;
    font-size: var(--font-size-4);

    color: var(--color-grey-0);
  }
`;

export const Usercomp = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  margin-top: 21px;
  padding: 25px;

  width: 100%;

  background-color: var(--color-grey-3);
  border-radius: 4px;

  p {
    color: var(--color-grey-1);

    text-align: center;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 13px 22px;

    background: var(--color-grey-4);
    border-radius: 4px;

    transition: all 0.3s;
  }

  li:hover {
    background: var(--color-grey-2);
  }

  p {
    font-weight: 700;
    font-size: var(--font-size-5);

    color: var(--color-white);
  }

  span {
    font-weight: 400;
    font-size: var(--font-size-6);

    color: var(--color-grey-1);
  }

  @media (max-width: 240px) {
    gap: 0.438rem;

    padding: 5px;
  }
`;
