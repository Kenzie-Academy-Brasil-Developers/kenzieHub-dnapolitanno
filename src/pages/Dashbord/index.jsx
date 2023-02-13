import { Navbar } from "../../components/Navbar";
import { Userinfo } from "../../components/Userinfo";
import { Maindash } from "../../components/Maindash";

export const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <Navbar setUser={setUser} />
      <Userinfo user={user} setUser={setUser} />
      <Maindash />
    </>
  );
};
