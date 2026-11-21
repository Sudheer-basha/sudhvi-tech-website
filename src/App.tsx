import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

const Home         = lazy(() => import('@/pages/Home'));
const About        = lazy(() => import('@/pages/About'));
const Courses      = lazy(() => import('@/pages/Courses'));
const CourseDetail = lazy(() => import('@/pages/CourseDetail'));
const Projects     = lazy(() => import('@/pages/Projects'));
const Contact      = lazy(() => import('@/pages/Contact'));
const Enroll       = lazy(() => import('@/pages/Enroll'));
const Privacy      = lazy(() => import('@/pages/Privacy'));
const Terms        = lazy(() => import('@/pages/Terms'));
const NotFound     = lazy(() => import('@/pages/NotFound'));

function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070D1E]" aria-label="Loading page">
      <div className="relative w-80 h-40 overflow-hidden speeder-light flex items-center justify-center">
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p className="mt-4 text-xs text-cyan-400 font-mono tracking-wider animate-pulse">
        LOADING PAGE...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index               element={<Home />}         />
            <Route path="about"        element={<About />}        />
            <Route path="courses"      element={<Courses />}      />
            <Route path="courses/:slug" element={<CourseDetail />} />
            <Route path="projects"     element={<Projects />}     />
            <Route path="contact"      element={<Contact />}      />
            <Route path="enroll"       element={<Enroll />}       />
            <Route path="privacy"      element={<Privacy />}      />
            <Route path="terms"        element={<Terms />}        />
            <Route path="*"            element={<NotFound />}     />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
