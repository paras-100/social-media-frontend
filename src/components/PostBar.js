import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  useBoolean,
} from "@chakra-ui/react";
import Scrollbars from "replace-custom-scrollbars";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "./PostCard";

const PostBar = ({ postData }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState();

  const createPost = useSelector((state) => state.createPost);
  const { loading, createData, error } = createPost;

  useEffect(() => {
    if (postData) {
      setData(Object.values(postData.data));
    }
  }, [postData]);

  useEffect(() => {
    if (data) {
      setData([createData, ...data]);
    }
  }, [createData]);

  console.log(data);

  return (
    <Flex
      direction="row"
      width="900px"
      height="100vh"
      bgColor="black"
      justifyContent="center"
      borderRight="1px"
      borderColor="white"
    >
      <Flex width="400px" bgColor="black" mt="50px">
        <Scrollbars>
          {data ? data.map((post) => <PostCard post={post} />) : null}
        </Scrollbars>
      </Flex>
    </Flex>
  );
};

export default PostBar;
