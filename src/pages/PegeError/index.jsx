import { Link } from "react-router-dom";
import { MainPageError } from './style';

export const Pagerror = () => {
  return (
    <MainPageError>
      <h1>404</h1>
      <Link to={"/"}>Home</Link>
    </MainPageError>
  );
};
