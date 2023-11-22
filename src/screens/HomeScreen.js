import { Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import SideBar from "../components/Sidebar";
import PostBar from "../components/PostBar";
import HelpBar from "../components/HelpBar";
import { listPosts } from "../actions/postActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, postData, error } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <Flex direction="row">
      <SideBar />

      <PostBar postData={postData} />

      <HelpBar />
    </Flex>
  );
};

export default HomeScreen;
