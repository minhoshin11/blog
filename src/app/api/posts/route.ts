// http://localhost:3000/api/post [POST]
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    const res = await fetch(
      `http://localhost:5500/posts${query ? "?title_like=" + query : ""}`
    );
    // console.log(
    //   `http://localhost:5500/posts${query ? "?title_like=" + query : ""}`
    // );
    const data = await res.json();
    return Response.json(data);
  } catch (e) {
    if (e instanceof Error) {
      return Response.json({ message: e.message, status: false });
    }
    return Response.json({
      message: "알 수 없는 오류가 발생했습니다.",
      status: false,
    });
  }

  return Response.json({ message: "GET 요청이 왔습니다." });
}
export async function POST(request: Request) {
  const body = await request.json();

  try {
    // db에 저장하는 로직
    const res = await fetch(`http://localhost:5500/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok)
      return Response.json({ message: "등록에 성공했습니다.", status: true });
    else
      return Response.json({ message: "등록에 실패했습니다.", status: false });
  } catch (e) {
    if (e instanceof Error) {
      return Response.json({ message: e.message, status: false });
    }
    return Response.json({
      message: "알 수 없는 오류가 발생했습니다.",
      status: false,
    });
  }
}
