import Layout from "../../Component/Layout";
import UserInfo from "../../Component/UserInfo";
import EditUserInfo from "../../Component/EditUserInfo";
import { useState } from "react";

function MyAccount() {
  const [view, setView] = useState("user-info");

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">My account</h1>
      {view === "edit-user-info" ? (
        <EditUserInfo setView={setView} />
      ) : (
        <UserInfo setView={setView} />
      )}
    </Layout>
  );
}

export default MyAccount;
