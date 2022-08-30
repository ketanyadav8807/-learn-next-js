import Link from "next/link"

const AboutPage = () => {
    return(
        <>
        <h1>About Page</h1>
        <h4>
            <Link href="/">Go to Home Page</Link><br/>
            <Link href="/about/organization">Go to Nested Page About Organization</Link>
        </h4>
      </>
    )
}
export default AboutPage;