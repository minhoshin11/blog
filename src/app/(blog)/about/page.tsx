export default function About() {
  return (
    <>
      <>
        <section
          className={` mx-auto bg-cover w-full relative  h-[378px] rounded-md before:content-[""] before:block before:h-[378px] before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#4b4b4b] before:to-[#4b4b4b] before:opacity-50 before:rounded-md before:z-[10] flex items-center justify-center`}
          style={{ backgroundImage: `url(${"/blog/about.jpg"})` }}
        >
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-white text-6xl font-bold z-[12] relative h-full ">
              About
            </h2>
            <p className="text-lg text-white z-[12] mt-2">
              MongoDB & Next.js14
            </p>
          </div>
        </section>
        <section className="max-w-[600px] flex  flex-col mx-auto text-center mb-8">
          <h3 className="text-xl text-[#4b4b4b] my-12 font-bold">
            개인블로그를 하나 만들어보고 싶어 만들었습니다.<br/>
          </h3>
          
          <p className="flex flex-row justify-between text-[#2b2b2b] font-bold text-lg">
  <a href="https://shinminho.store/" className="hover:text-blue-500">포트폴리오</a>
  <a href="https://github.com/minhoshin11/" className="hover:text-blue-500">깃허브</a>
  <a href="https://dailycoding777.tistory.com/" className="hover:text-blue-500">블로그</a>
</p>
        </section>
        <section className="mt-14 mb-6">
          <img src={"/blog/bridge.jpg"} alt="" />
        </section>
        <section className="max-w-[600px] flex  flex-col mx-auto text-center mb-8">
          <h3 className="text-lg text-[#4b4b4b] mt-12 mb-3">
            메인에 검색기능과 상세페이지에 다른 글을 누를 수 있는 기술을 중점으로 뒀습니다.
          </h3>
          <p className="text-[#2b2b2b]">
          기술스택: next.js14,mongodb,tailwind
          </p>
        </section>
      </>
    </>
  );
}
