import React from "react";
import { useCustomFetch } from "../../../hooks/useCustomQuerys";
import styles from "../../../styles.module.css";
import { Header } from "../../../components/Header";
import { UserForm } from "../../../components/UserForm";

const Profile = () => {
  const { data, isLoading, isError } = useCustomFetch(
    "userInfo",
    "http://localhost:3000/api/v1/users/11"
  );

  /* FIXME: */
  if (isLoading) return null;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.profileContainer}>
      <h1>Tu perfil</h1>
      <UserForm user={data.data.data.user} />
    </div>
  );
};

export default Profile;
