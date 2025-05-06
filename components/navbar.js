"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import {
  Navbar,
  NavbarContent,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Divider,
  DropdownSection,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import "@/styles/navbar.css";

export default function NavigationBar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Navbar id="navbar" position="static">
      <NavbarContent id="navbarContent">
        <Link href="/" id="links">
          Home
        </Link>
        <Link href="/categories" id="links">
          Submit
        </Link>
        {session ? (
          <>
            <Divider id="divider" orientation="vertical" />
            <Dropdown backdrop="opaque" placement="bottom-end">
              <DropdownTrigger id="avatarDropdown">
                <Avatar isBordered as="button" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{session.user.email}</p>
                </DropdownItem>
                <DropdownSection showDivider title="Navigation">
                  <DropdownItem key="home" onClick={() => router.push("/")}>
                    Home
                  </DropdownItem>
                  <DropdownItem
                    key="categories"
                    onClick={() => router.push("/categories")}
                  >
                    Submit
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection showDivider title="Actions">
                  <DropdownItem
                    key="submitWork"
                    onClick={() => router.push("/categories/submission")}
                  >
                    Submit your monthly plan
                  </DropdownItem>
                  <DropdownItem
                    key="register"
                    onClick={() => router.push("/register")}
                  >
                    Register for others
                  </DropdownItem>
                </DropdownSection>

                <DropdownItem
                  key="logout"
                  color="danger"
                  variant="flat"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : (
          <>
            <Divider id="divider" orientation="vertical" />
            <Dropdown backdrop="opaque" placement="bottom-end">
              <DropdownTrigger id="avatarDropdown">
                <div id="hamburgerMenu">
                  <div id="line"></div>
                  <div id="line"></div>
                  <div id="line"></div>
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownSection showDivider title="Navigation">
                  <DropdownItem key="home" onClick={() => router.push("/")}>
                    Home
                  </DropdownItem>
                  <DropdownItem
                    key="categories"
                    onClick={() => router.push("/categories")}
                  >
                    Submit
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Actions">
                  <DropdownItem
                    key="register"
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </DropdownItem>
                  <DropdownItem
                    key="login"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
