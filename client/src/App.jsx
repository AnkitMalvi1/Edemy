import { Route, Routes } from "react-router-dom"
import Home from "./pages/student/Home"
import CoursesList from "./pages/student/CoursesList"
import CourseDetails from "./pages/student/CourseDetails"
import MyEnrollments from "./pages/student/MyEnrollments"
import Player from "./pages/student/Player"
import Loading from "./components/student/Loading"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
      </Routes>
    </div>
  )
}

export default App