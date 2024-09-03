import { headers } from 'next/headers'
export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
  
  return (
    <div>
      <h1>헤더 정보</h1>
      <p>Referer: {referer}</p>
      <p>Headers List : {JSON.stringify(headersList, null, 2)}</p>
    </div>
  )
}
