import { TPost } from "@/types/post";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { dummyAvatar } from "../../../../../public/blog/assets";
import noImage from '../../../../../public/blog/noImage.png';

export default async function Read({ params }: { params: { id: string } }) {
  const post: TPost = await (
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/posts/${params.id}`, {
      cache: "no-cache",
    })
  ).json();
  const otherPosts: TPost[] = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/posts/${params.id}?type=ne`,
      {
        cache: "no-cache",
      }
    )
  ).json();
  console.log(otherPosts);
  return (
    <>
      {/* 이미지 */}
      <section className="max-w-[800px] mx-auto">
        <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
          {post.category}
        </strong>
        <h3 className="text-[46px] font-bold">
          {post.title}
        </h3>
        <p className="text-sm text-[#515151] mb-[18px]">
          {format(post.datetime, "yyyy.MM.dd")}
        </p>
        {<Image
            src={post.thumbnail ? post.thumbnail :noImage}
            width={800}
            height={278}
            alt="dummy"
            className="object-cover"
          />}
        <div className="mt-4 flex items-center gap-[14px]">
          <Image src={dummyAvatar} alt="" className="rounded-s-full" />
          <strong className="text-sm">George Costanazv</strong>
        </div>
      </section>
      {/* 본문 */}
      <section className="max-w-[800px] mx-auto text-xl text-[#434343] mt-5 [&>p]:mb-10 ">
        <div className="mb-20">{post.description}</div>
      </section>
      {/* 관련 게시물 */}
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-[36px] font-bold mb-[30px]">Recommand Reading</h3>
        <ul className="[&>li]:mb-[30px]">
          {otherPosts &&
            otherPosts.map((post) => (
              <li>
                <Link href={`/read/${post.id}`}>
                  <div className="flex gap-[34px]">
                    <Image
                      width={250}
                      height={156}
                      src={post.thumbnail ? post.thumbnail :noImage}
                      alt={post.title}
                      className="rounded-md max-w-[250px]"
                    />
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{post.title}</h4>
                      <p className="text-lg text-[#4B4B4B] line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
