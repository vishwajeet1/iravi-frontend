import type { NextPage } from "next";
import { useState } from "react";
import Layout from "components/common/Layout";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { BlogInterface } from "components/Profile/redux/BlogInterface";

const BlogList: NextPage = () => {
  const [blogList, setBlogList] = useState<Array<BlogInterface>>([]);
  return (
    <Layout>
      <div>Blogs Listing</div>
      {blogList.map((blog) => (
        <Card key={blog.id}>
          <Box>
            <div>{blog.postText}</div>
          </Box>
        </Card>
      ))}
    </Layout>
  );
};

export default BlogList;
