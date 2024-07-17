import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Movie = lazy(() => import("./components/movie/movieComponent"));
const RCounter = lazy(() => import("./components/RCounter/reduxCounterComponent"));
const MovieDetail = lazy(() => import("./components/MovieDetail/movieDetailcomponent"));
const RcounterClass = lazy(() => import("./components/RcounterClass"));
const FooterComponent = lazy(() => import("./components/common/footer"));
const UserComponent = lazy(() => import("./components/user"));
const Loader = lazy(() => import("./components/spinner/Spinner"));

// import  MovieDetail  from './components/MovieDetail/movieDetailcomponent';
// import RCounter from './components/RCounter/reduxCounterComponent';
// import RcounterClass from './components/RcounterClass';
// import FooterComponent from './components/common/footer';
// import Movie from './components/movie/movieComponent'
// import UserComponent from './components/user';
// import Loader from './components/spinner/Spinner';




function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Movie />} />
            <Route path="/movie-detail/:id" element={<MovieDetail />} />
            <Route path="/rcounter" exact element={<RCounter />} />
            <Route path="/rcounter-class" exact element={<RcounterClass />} />
            <Route path="/users" exact element={<UserComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </Suspense>

      <div id='install_banner'>
        <span>آیا مایل به نصب این اپلیکیشن هستید؟</span>
        <button id='yes'>بله</button>
        <button id='no'>خیر</button>
      </div>
    </div>
  );
}

export default App;
