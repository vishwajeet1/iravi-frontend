import type { NextPage } from "next";
import { useRouter } from "next/router";
import BlogPostDetails from "components/Blogs/BlogPostDetails";
import Layout from "components/common/Layout";

const BlogPage: NextPage = () => {
  const router = useRouter();
  const blogId = router.query["blogId"] as string;
  return (
    <Layout>
      <BlogPostDetails blogId={blogId} />
    </Layout>
  );
};

export default BlogPage;
