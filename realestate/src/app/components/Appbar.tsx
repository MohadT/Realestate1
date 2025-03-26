"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
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
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} className="bg-gray-300 shadow-md">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu (for larger screens) */}
      <NavbarContent className="hidden sm:flex gap-3 justify-center">
        <NavbarItem>
          <Link className="text-gray-700 hover:text-blue-500" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-gray-700 hover:text-blue-500" aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-700 hover:text-blue-500" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Side Items (for larger screens) */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-gray-700 hover:text-blue-500" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="text-white">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu className="bg-gray-100 p-4">
         
        </NavbarMenu>
      )}
    </Navbar>
  );
};

export default Appbar;
