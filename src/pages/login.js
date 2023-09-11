import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title> Login using third-party</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() => {
              signIn("google", { callbackUrl: "http://localhost:3000/" });
            }}
          />
          <GithubOutlined
            onClick={() => {
              signIn("github", { callbackUrl: "http://localhost:3000/" });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
