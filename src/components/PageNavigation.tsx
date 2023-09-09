import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const DropNavigation = () => {
  return (
    <>
      <Menu>
        <MenuButton
          className="PagesButton"
          color={"black"}
          bg={"green.100"}
          fontSize={20}
          fontWeight={600}
          textDecoration="underline"
          marginLeft={10}
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
        </MenuList>
      </Menu>
    </>
  );
};

export default DropNavigation;
