import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  Textarea,
  useBoolean,
} from "@chakra-ui/react";
import { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { MdBookmarkBorder } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdOutlineBookmark } from "react-icons/md";

const PostCard = ({ post }) => {
  const [actLike, setActLike] = useBoolean(false);
  const [actSave, setActSave] = useBoolean(false);

  const [actComments, setActComments] = useState();
  const [storeComment, setStoreComment] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setStoreComment([...storeComment, actComments]);
    setActComments("");
    console.log(storeComment);
  };

  return (
    <Flex
      direction="column"
      maxHeight="2000px"
      bgColor="black"
      mb="10px"
      borderBottom="1px"
      borderColor="white"
    >
      <Flex
        bgColor="black"
        width="400px"
        height="70px"
        alignItems="center"
        px="10px"
      >
        <Box boxSize="50px">
          <Image
            src={post.owner.picture}
            borderRadius="50px"
            objectFit="cover"
          />
        </Box>
        <Heading fontSize="20px" ml="10px" color="white">
          {post.owner.firstName} {post.owner.lastName}
        </Heading>
      </Flex>

      <Flex
        direction="column"
        bgColor="black"
        width="400px"
        minH="10px"
        justifyContent="center"
      >
        <Image src={post.image} />
        <Flex
          width="400px"
          height="50px"
          bgColor="black"
          alignItems="center"
          justifyContent="space-between"
          px="10px"
        >
          <Flex justifyContent="space-between" width="90px">
            {actLike ? (
              <IconButton
                icon={<FaHeart />}
                fontSize="25px"
                color="red"
                bg="none"
                _hover={{ bg: "none", color: "red" }}
                onClick={() => setActLike.toggle()}
              />
            ) : (
              <IconButton
                icon={<FaRegHeart />}
                fontSize="25px"
                color="white"
                bg="none"
                _hover={{ bg: "none", color: "grey" }}
                onClick={() => setActLike.toggle()}
              />
            )}

            <IconButton
              icon={<GoShareAndroid />}
              fontSize="25px"
              color="white"
              bg="none"
              _hover={{ bg: "none", color: "grey" }}
            />
          </Flex>

          {actSave ? (
            <IconButton
              icon={<MdOutlineBookmark />}
              fontSize="30px"
              color="white"
              bg="none"
              _hover={{ bg: "none", color: "white" }}
              onClick={() => setActSave.toggle()}
            />
          ) : (
            <IconButton
              icon={<MdBookmarkBorder />}
              fontSize="30px"
              color="white"
              bg="none"
              _hover={{ bg: "none", color: "white" }}
              onClick={() => setActSave.toggle()}
            />
          )}
        </Flex>
      </Flex>

      <Flex
        direction="column"
        minHeight="100px"
        bgColor="black"
        px="15px"
        mb="10px"
      >
        <Heading color="white" fontSize="17px">
          {post.likes} likes
        </Heading>
        <Heading color="white" fontSize="17px" fontWeight="400">
          {post.text}
        </Heading>
        <Heading color="#59BDFF" fontSize="17px" fontWeight="400" mt="10px">
          Comment section
        </Heading>

        {storeComment.length === 0 ? (
          <Heading color="white" fontSize="17px" fontWeight="400">
            "No comments yet..."
          </Heading>
        ) : (
          storeComment.map((comment) => (
            <Heading color="white" fontSize="17px" fontWeight="400">
              {comment}
            </Heading>
          ))
        )}

        <form onSubmit={submitHandler}>
          <Input
            value={actComments}
            placeholder="Add a comment"
            color="white"
            border="none"
            _focusVisible={{ border: "none" }}
            ml="-15px"
            onChange={(e) => setActComments(e.target.value)}
          />
        </form>
      </Flex>
    </Flex>
  );
};

export default PostCard;
