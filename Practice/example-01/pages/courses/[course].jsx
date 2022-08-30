import { withRouter } from "next/router";

const coursesMap = {
    'full-stack-web-development': 'Full Stack Web Development',
    'full-stack-android-development': 'Full Stack Android Development',
}

const FSDCoursePage = (props) => {
    console.log("props.router.query here",props.router.query , props.router.query.course);

    return (
        <>
            <h1>You Search :-  {props.router.query.course} 👋</h1>
            <h1>{coursesMap[props.router.query.course] || 'Not in our'} Course</h1>
        </>
    )
};
export default withRouter(FSDCoursePage);