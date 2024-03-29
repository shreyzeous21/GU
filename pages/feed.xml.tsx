import { GetServerSideProps } from "next";
import React from "react";
import services from "services";
import Rss from "rss";

type Props = {};

export default function Feed({}: Props) {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blogs = await services.queryBlogs();

  const feed = new Rss({
    title: "Project DEV",
    site_url: "",
    feed_url: "",
  });

  blogs.map((blog) =>
    feed.item({
      title: blog.title,
      url: `blog/${blog.slug}`,
      date: blog.publishedAt,
      description: blog.description,
    })
  );

  context.res.setHeader("Content-Type", "text-xml");
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  context.res.write(feed.xml({ indent: true }));
  context.res.end();

  return {
    props: {},
  };
};
