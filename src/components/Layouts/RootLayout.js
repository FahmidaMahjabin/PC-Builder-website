import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const items = [
  {
    key: "1",
    label: <Link href="/cpu">CPU/Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/motherboard">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/ram">RAM</Link>,
  },
  {
    key: "4",
    label: <Link href="/power-supply-unit">Power Supply Unit</Link>,
  },
  {
    key: "5",
    label: <Link href="/storage-device">Storage Device</Link>,
  },
  {
    key: "6",
    label: <Link href="/monitor">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/other">other</Link>,
  },
];
const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Home
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/pc-builder">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              PC Builder
            </items>
          </Link>
          {/* <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link> */}
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Button>Categories</Button>
          </Dropdown>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC-Builder website
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC Builder ©2023 Created by Fahmida
      </Footer>
    </Layout>
  );
};
export default RootLayout;
