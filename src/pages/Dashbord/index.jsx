import { Navbar } from "../../components/Navbar";
import { Userinfo } from "../../components/Userinfo";
import { Maindash } from "../../components/Maindash";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Userinfo />
      <Maindash />
    </>
  );
};
