import {Navbar, Text,useTheme,Link } from "@nextui-org/react";

import  MyStyledButton  from "@/components/buttons/Button"

import { Layout } from "./Layout";

export default function NavbarItem() {

  const { theme } = useTheme();

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >

          <Text b color="inherit" hideIn="xs">
            PsyDTrader
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#">Trading Jornal</Navbar.Link>
          <Navbar.Link href="#">Price Alert</Navbar.Link>
          <Navbar.Link href="#"> Trader Tool </Navbar.Link>
          <Navbar.Link href="#">Account Reporting</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content


          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item>
          <MyStyledButton
          className=' bg-[#B89F1B]'
          auto
          size="mysize"
          color="mycolor">
          Get started
        </MyStyledButton>
          </Navbar.Item>
        </Navbar.Content>

      </Navbar>
    </Layout>
  );
}
