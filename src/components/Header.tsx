import React from "react";
import Container from "./Container";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationMenuDemo() {
  return (
    <div>
      <div className="hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Zážitky dětí</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-4 p-6 md:w-[200px] pl-8">
                  <a href="/docs" title="Introduction">
                    Zážitky 2024
                  </a>
                  <a href="/docs/installation" title="Installation">
                    Zážitky 2023
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2022
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2021
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2020
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2019
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2018
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2017
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2016
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2015
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Zážitky 2014
                  </a>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Výroční zprávy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dokumenty
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Historie
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sponzoři
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  GDPR
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kontakt
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src="/images/hamburger-menu.png" alt="hamburger-menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2 p-5 font-bold">
            <DropdownMenuItem>Zážitky dětí</DropdownMenuItem>
            <DropdownMenuItem>Výroční zprávy</DropdownMenuItem>
            <DropdownMenuItem>Dokumenty</DropdownMenuItem>
            <DropdownMenuItem>Historie</DropdownMenuItem>
            <DropdownMenuItem>Sponzoři</DropdownMenuItem>
            <DropdownMenuItem>GDPR</DropdownMenuItem>
            <DropdownMenuItem>Kontakt</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
