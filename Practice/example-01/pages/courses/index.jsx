import { useRouter } from 'next/router';

const CoursesMainPage = () => {
    const router = useRouter();

    return (
        <>
            <h1>Courses</h1>
            <h3>Dynamic routing</h3>
            <ul>
                <li onClick={()=> router.push("/courses/full-stack-web-development")}>full-stack-web-development</li>
                <li onClick={()=> router.push("/courses/full-stack-android-development")}>full-stack-android-development</li>
                <li onClick={()=> router.push("/courses/Other random Courses")}>other random courses</li>
            </ul>
        </>
    )
};
export default CoursesMainPage;