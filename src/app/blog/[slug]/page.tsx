// app/blog/[slug]/page.js
import { headers } from "next/headers";
type Props = {
  params: {
    slug: string,
  },
  searchParams: {
    donknow: string,
  }
}

export default async function BlogPost({ params, searchParams }:Props) {
  const headersList = headers();
  const referer = headersList.get("referer");

  // 현재 라우트 정보 접근
  console.log("Current slug:", params.slug);

  // 쿼리 파라미터 접근
  console.log("Search params:", searchParams.write);

  // 새로운 URL 생성 (쿼리 파라미터 조작)
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set("newParam", "newValue");
  const newUrl = `/blog/${params.slug}?${newSearchParams.toString()}`;

  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>Params : {JSON.stringify(params, null, 2)}</p>
      <p>searchParams : {JSON.stringify(searchParams, null, 2)}</p>
      <p>Referer: {referer}</p>
      <p>New URL: {newUrl}</p>
    </div>
  );
}
