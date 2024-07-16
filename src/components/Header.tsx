import React from "react";
import Container from "./Container";
export function NavigationMenuDemo() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

const Header = () => {
  return (
    <Container className="h-16 mb-4">
      <div className="flex items-center justify-between flex-row mt-2">
        <a href="/">
          <img
            src="/images/dd-uh-ostroh-logo-png.png"
            className="max-h-20 h-20 w-auto relative"
            alt="Logo"
          />
        </a>

        <NavigationMenuDemo />
      </div>
    </Container>
  );
};

export default Header;
