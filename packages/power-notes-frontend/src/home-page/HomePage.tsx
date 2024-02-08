import React from "react";
import { LoginButton } from "../auth-components/LoginButton";
import LogoutButton from "../auth-components/LogoutButton";
import { UserProfile } from "../auth-components/UserProfile";
import { PersistentLeftMenu } from "../navigation-components/PersistentLeftMenu";

export function HomePage() {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <PersistentLeftMenu />
      <LoginButton />
      <LogoutButton />
      <UserProfile />
      <p>
        This is the home page for the Power Notes application. It is a
        placeholder for the actual home page.
      </p>
    </React.Fragment>
  );
}
