import PostList from "@/components/PostList";
import Search from "@/components/Search";

export default function Home({ searchParams }: { searchParams: any }) {
  const query = searchParams.query || "";
  return (
    <>
      {/* 메인 영역 */}
      <main className="mt-[49px]">
        {/* 메인 타이틀 */}
        <section className="flex flex-col items-center justify-center">
          <h2 className="text-[48px] font-extrabold text-[#000638]">
            my Blog
          </h2>
          <p className="text-xl text-[#605C59]">
          Daily life and study blog
          </p>
        </section>
        {/* 검색 영역 */}
        <Search />
        {/* 포스트 리스트 */}
        <PostList query={query} />
      </main>
    </>
  );
}
