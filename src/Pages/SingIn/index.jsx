import { useState } from "react";
import Layout from "../../Component/Layout";
import CreateUserInfo from "../../Component/CreateUserInfo";
import LogIn from "../../Component/LogIn";

function SignIn() {
  const [view, setView] = useState("user-info");

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {view === "create-user-info" ? (
        <CreateUserInfo />
      ) : (
        <LogIn setView={setView} />
      )}
    </Layout>
  );
}

export default SignIn;
