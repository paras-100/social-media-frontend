import {
  Flex,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { loginUser, createPost } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import img from "../assets/dog1.jpeg";
import pic from "../assets/dog3.jpeg";

const HelpBar = () => {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userName, setUserName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const userData = useSelector((state) => state.userData);
  const { loading, name, error } = userData;

  useEffect(() => {}, [name]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(userName));
    setUserName("");
  };

  const createPostHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPost({
        image: img,
        likes: 0,
        owner: { firstName, lastName, picture: pic },
        text: description,
      })
    );
  };

  return (
    <Flex
      direction="column"
      bgColor="black"
      width="390px"
      px="10px"
      py="20px"
      alignItems="center"
    >
      <Flex
        direction="column"
        justifyContent="space-between"
        width="180px"
        minHeight="80px"
      >
        {name ? (
          <Heading
            fontSize="25px"
            textAlign="center"
            color="white"
            fontWeight="500"
          >
            Welcome, {name}
          </Heading>
        ) : (
          <Flex direction="column">
            <Heading
              fontSize="20px"
              textAlign="center"
              color="white"
              fontWeight="500"
              mb="10px"
            >
              Login Here
            </Heading>

            <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Login with dummy credentials</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={submitHandler}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      value={userName}
                      placeholder="Your Name"
                      onChange={(e) => setUserName(e.target.value)}
                    />

                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" />

                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        type="submit"
                        onClick={onClose}
                      >
                        Login
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>

            <Button
              bgColor="#007BCD"
              color="white"
              borderRadius="10px"
              fontSize="17px"
              _hover={{ bgColor: "#59BDFF", color: "black" }}
              onClick={onOpen}
            >
              Login
            </Button>
          </Flex>
        )}
      </Flex>

      <Flex
        direction="column"
        justifyContent="space-between"
        width="390px"
        minH="80px"
        bgColor="black"
        alignItems="center"
      >
        <Heading color="#007BCD" mt="60px">
          Create Post
        </Heading>
        <Flex mt="10px">
          <form onSubmit={createPostHandler}>
            <FormLabel color="white" mt="5px">
              First Name
            </FormLabel>
            <Input
              placeholder="First Name"
              value={firstName}
              color="white"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <FormLabel color="white" mt="5px">
              Last Name
            </FormLabel>
            <Input
              placeholder="Last Name"
              color="white"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <FormLabel color="white" mt="5px">
              Description
            </FormLabel>
            <Input
              placeholder="Description"
              color="white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button
              type="submit"
              mt="20px"
              bgColor="#007bcd"
              color="white"
              _hover={{ color: "black", bgColor: "grey" }}
            >
              Create Post
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HelpBar;
