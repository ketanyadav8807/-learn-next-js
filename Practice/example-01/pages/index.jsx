import Link from "next/link";
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>Hey! 👋</h1>
      <h4>
        <Link href="about">Go to About = next/link</Link><br/>
        <div onClick={() => router.push("courses")}>Go to Courses = next/router</div>
      </h4>
    </>
  )
}
export default IndexPage;