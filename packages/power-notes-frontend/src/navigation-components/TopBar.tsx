import React from "react";
import { LoginButton } from "../auth-components/LoginButton";
import LogoutButton from "../auth-components/LogoutButton";
import { PersistentLeftMenu } from "./PersistentLeftMenu";
import { UserProfile } from "../auth-components/UserProfile";

export const TopBar = React.memo(function TopBar() {
  return (
    <div>
      <PersistentLeftMenu />
      <UserProfile />
      <LoginButton />
      <LogoutButton />
    </div>
  );
});
