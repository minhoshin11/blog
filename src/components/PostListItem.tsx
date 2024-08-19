import { TPost } from "@/types/post";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { dummyAvatar } from "../../public/blog/assets";
import noImage from '../../public/blog/noImage.png';


export default function PostListItem({
  id,
  thumbnail,
  title,
  description,
  datetime,
  category,
}: TPost ) {
  return (
    <>
      <Link href={`/read/${id}`}>
        <article>
          {<Image
            src={thumbnail ? thumbnail :noImage}
            width={800}
            height={278}
            alt="dummy"
            className="object-cover"
          />}
          
          
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {category}
            </strong>
            <div className="flex flex-row w-full justify-between ">
            <h3 className="text-[24px] font-bold">{title}</h3>
            <p className="text-[#515151]">
              {format(datetime, "yyyy.MM.dd")}
            </p>
            </div>
            {/* <p className="mt-[15px] text-[#434343]">{description}</p> */}
            <div className="mt-4 flex items-center gap-[14px]">
              <Image
                src={dummyAvatar}
                alt="프로필 이미지"
                className="rounded-s-full"
              />
              <strong className="text-sm">신민호</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
