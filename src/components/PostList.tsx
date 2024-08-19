import { TPost } from "@/types/post";
import PostListItem from "./PostListItem";

export default async function PostList({ query }: { query: string }) {
  const posts: TPost[] = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/posts${
        query && "?query=" + query
      }`,
      {
        cache: "no-cache",
      }
    )
  ).json();

  return (
    <>
      <section className="grid md:grid-cols-2 gap-[80px] mt-[80px] mb-[152px]">
        {Array.isArray(posts) && posts.map((post) => <PostListItem key={post.id} {...post} />)}
      </section>
    </>
  );
}
