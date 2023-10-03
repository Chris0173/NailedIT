import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "./NavBar.css";
import { useState } from "react";

interface DropNavigationProps {}

const DropNavigation: React.FC<DropNavigationProps> = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Pages");

  const handleMenuItemClick = (page: string) => {
    setSelectedPage(page);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          className="pagesButton"
          colorScheme="yellow"
        >
          {selectedPage}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleMenuItemClick("Home")}>
            <ChakraLink as={ReactRouterLink} to="/home">
              Home
            </ChakraLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Projects")}>
            <ChakraLink as={ReactRouterLink} to="/projects">
              Projects
            </ChakraLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Documents")}>
            <ChakraLink as={ReactRouterLink} to="/documents">
              Documents
            </ChakraLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Inventory")}>
            <ChakraLink as={ReactRouterLink} to="/inventory">
              Inventory
            </ChakraLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Calendar")}>
            <ChakraLink as={ReactRouterLink} to="/calendar">
              Calendar
            </ChakraLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default DropNavigation;
