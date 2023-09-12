import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "../CSS/NavBar.css";

const DropNavigation = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          className="pagesButton"
        >
          Pages
        </MenuButton>
        <MenuList>
          <MenuItem>
            <ChakraLink as={ReactRouterLink} to="/home">
              Home
            </ChakraLink>
          </MenuItem>
          <MenuItem>
            <ChakraLink as={ReactRouterLink} to="/projects">
              Projects
            </ChakraLink>
          </MenuItem>
          <MenuItem>
            <ChakraLink as={ReactRouterLink} to="/documents">
              Documents
            </ChakraLink>
          </MenuItem>
          <MenuItem>
            <ChakraLink as={ReactRouterLink} to="/inventory">
              Inventory
            </ChakraLink>
          </MenuItem>
          <MenuItem>
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
