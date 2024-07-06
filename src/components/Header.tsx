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
              <NavigationMenuTrigger>Výroční zprávy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-4 p-6 md:w-[150px] pl-8">
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000666-3551635517/VZ_2022-23.pdf"
                    title="Installation"
                    target="_blank"
                  >
                    2022-2023
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000638-1a0f91a0fb/VZ_2021-22.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2021-2022
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000612-66f9366f95/VZ_2020-21.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2020-2021
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000605-5c8b55c8bd/VZ_2019-20.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2019-2020
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000594-8ef558ef58/VZ_2018-19.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2018-2019
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000529-06bbe07b54/VZ_2017-18.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2017-2018
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000519-7c52a7d4cc/VZ_2016-17.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2016-2017
                  </a>
                  <a
                    href="https://8839409ab7.cbaul-cdnwnd.com/058f74d107b1ac2d6104fe1c47b1961c/200000518-737b174757/VZ_2015-16.pdf"
                    title="Typography"
                    target="_blank"
                  >
                    2015-2016
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQDFOux6nbERCyaXgsRAjntl4EFApI6EbDkrj9ESnUOaqYu1Ek93ynUxfe80YHT0CVsxzEteEGpZt8Q/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2014-2015
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQVgRm7IRdUKpS7tWO5JrHtEnpW-U5xfkpp9gp0D3e8Q-a_ZJTI1RbYZGhhGAc4haOYKZeIkjVi-PWU/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2013-2014
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQo2gkK4unrvt7WbX0Hq4Fv6_2pZHCZnjMMMreRtkWu0u9nsV0j7OPJUUKyeOv4c-NexosA_1NIaKK2/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2012-2013
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQcwzdHAjpz3adk9EDRTfAtvdV5M9qw4nq0V_RoTDfOsI8mY-NC_HZWFrqqof0YblUfXDiDowB3lKei/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2006-2007
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQWP73GlPAzmTU9YdoV7tNp9Cr_7aNqpVgqz7EV45BqXzLAea1JoAP5Crifz_aPH5j4xFBEYicqN6p9/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2005-2006
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vTYVjD9aQYAS0gvnNbhiHRtdwQi87f3xIAc7FIfQ-VgwwSnIUQSw63WJJv6-eZB7rPGZpBLnL3Ukvuu/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2004-2005
                  </a>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vQUVBN0T1yt0UTvquN_KocwEvz8LSjsoRXeoFrNsSEWYaXCbulaVWkfjwD6mYv4mHJl124b5AB8gXof/pub"
                    title="Typography"
                    target="_blank"
                  >
                    2003-2004
                  </a>
                </ul>
              </NavigationMenuContent>
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
              <Link href="/GDPR" legacyBehavior passHref>
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
            <DropdownMenuItem>
              <Link href="/">Zážitky dětí</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Výroční zprávy</DropdownMenuItem>
            <DropdownMenuItem>Dokumenty</DropdownMenuItem>
            <DropdownMenuItem>Historie</DropdownMenuItem>
            <DropdownMenuItem>Sponzoři</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/GDPR" legacyBehavior passHref>
                GDPR
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                Kontakt
              </Link>
            </DropdownMenuItem>
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
