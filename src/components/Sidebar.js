import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";

import { Scrollbars } from "replace-custom-scrollbars";

const SideBar = () => {
  return (
    <Flex
      bgColor="black"
      width="244px"
      height="100vh"
      borderRight="1px"
      borderColor="whitesmoke"
      justifyContent="flex-start"
    >
      <Flex px="20px" py="20px" direction="column">
        <Heading color="white" fontSize="30px">
          Sociopedia
        </Heading>

        <Flex py="40px">
          <Stack direction="column" spacing={6}>
            <Button
              leftIcon={<GoHomeFill />}
              width="214px"
              paddingRight="130px"
              fontSize="20px"
              fontWeight="700"
              bgColor="black"
              color="white"
              _hover={{ color: "black", bgColor: "white" }}
              transition="ease-in-out 0.2s"
            >
              Home
            </Button>
            <Button
              leftIcon={<IoSearch />}
              width="214px"
              paddingRight="130px"
              fontSize="20px"
              fontWeight="700"
              bgColor="black"
              color="white"
              _hover={{ color: "black", bgColor: "white" }}
              transition="ease-in-out 0.2s"
            >
              Search
            </Button>
            <Button
              leftIcon={<FaRegHeart />}
              width="214px"
              paddingRight="80px"
              fontSize="20px"
              fontWeight="700"
              bgColor="black"
              color="white"
              _hover={{ color: "black", bgColor: "white" }}
              transition="ease-in-out 0.2s"
            >
              Notificaions
            </Button>
            <Button
              leftIcon={<BsFillPersonFill />}
              width="214px"
              paddingRight="130px"
              fontSize="20px"
              fontWeight="700"
              bgColor="black"
              color="white"
              _hover={{ color: "black", bgColor: "white" }}
              transition="ease-in-out 0.2s"
            >
              Profile
            </Button>
            <Button
              leftIcon={<LuSettings />}
              width="214px"
              paddingRight="115px"
              fontSize="20px"
              fontWeight="700"
              bgColor="black"
              color="white"
              _hover={{ color: "black", bgColor: "white" }}
              transition="ease-in-out 0.2s"
            >
              Settings
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
