import React from 'react'
// import image1 from '../../assets/images/img1.jpg'
// import image2 from '../../assets/images/img2.jpg'
// import image3 from '../../assets/images/img3.jpg'
// import image4 from '../../assets/images/img4.jpg'
// import image5 from '../../assets/images/img5.jpg'
// import image6 from '../../assets/images/img6.jpg'
// import image7 from '../../assets/images/img7.jpg'
// import image8 from '../../assets/images/img8.jpg'

import { useState, useEffect, useCallback } from 'react';
import Item from './item'
import { Header } from '../common/header'
import axios from 'axios'
import { baseUrl, config } from '../../constants/Api'

import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from '../../features/movie'

// const data = [
//     { img: image1, title: 'movie1', year: '1980' },
//     { img: image2, title: 'movie2', year: '2020' },
//     { img: image3, title: 'movie3', year: '2021' },
//     { img: image4, title: 'movie4', year: '1990' },
//     { img: image5, title: 'movie5', year: '2020' },
//     { img: image6, title: 'movie6', year: '1970' },
//     { img: image7, title: 'movie7', year: '2023' },
//     { img: image8, title: 'movie8', year: '2024' }
// ]

const Movie = () => {

    const dispatch = useDispatch()
   
    let data = useSelector(state => state?.movies?.movieList);

    const loading = useSelector(state => state?.movies?.loading)


    console.log(loading);
    console.log(data);
    //in mount and pending phase data is an empty array 
    if (!Array.isArray(data)) {
        data = data.results
    }
    useEffect(() => {
        if (data) {
            dispatch(fetchMovie())
        }

    }, [])


    return (
        <>
            <Header />
            <div className="container">
                <div className="row">

                    {loading ? <p className="loading">درحال دریافت داده می باشیم لطفا منتظر بمانید...</p> :

                        data ? data.map((i, index) => <Item
                                                        key={index}
                                                        img={i.movie_img}
                                                        title={i.movie_name}
                                                        year={i.year}
                                                        des={i.movie_des}                           
                                                        id={i.objectId} />
                                    ) : null
                    }
                </div>
            </div>
        </>
    )

}

export default Movie
// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);
// useEffect(() => {


// //axios
//     setLoading(true);
//     axios.get(baseUrl, config)
//         .then(function (response) {
//             console.log(response.data.results);
//             setData(response.data.results);
//             setLoading(false);
//         })
//         .catch(function (error) {
//             setLoading(false);
//             alert('error');
//             console.log(error);
//         })
// }, [])

//fetch
// useEffect(() => {

//     fetch("https://parseapi.back4app.com/classes/movie", {

//         headers: {
//             "X-Parse-Application-Id": " HFUbZ9kF8sSlRVb8WnHhC8AXiFRJqbaL3W8u2u5E",
//             "X-Parse-REST-API-Key": "L9O1pqNiuv6m36FePsxxXqI9u3kw7QQRkh0XjrRa"

//         }
//     }).then(
//         res => {

//             res.json().then(info => {
//                 console.log(info);
//                 setData(info.results);
//                 setLoading(false);
//             });
//         }, error => {
//             setLoading(false);
//             alert('error');
//             console.log(error);
//         }
//     )
// }, [])


// return (
//     <div className='container'>

//         <div className='row border-bottom'>
//             <Header />
//         </div>

//         <div className='row'>
//             {loading ? (<p className='text-center bg-danger alert'>Loading...</p>)
//                 : data.length > 0 ?
//                     (
//                         data.map((i, index) => (
//                             <Item
//                                 key={index}
//                                 img={i.movie_img}
//                                 title={i.movie_name}
//                                 year={i.year}
//                                 des={i.movie_des}
//                                 id={i.objectId}
//                             />
//                         ))
//                     ) : (
//                         <p className='text-center bg-warning alert'>No data available!</p>
//                     )}
//         </div>

//     </div>
// )
// const [button, setButton] = useState('');
// const [blogPosts, setBlogPosts] = useState([
//     { title: 'a', id: 1 },
//     { title: 'bb', id: 2 },
// ])

// const onYesPress = () => {
//     setButton('yes');
// }

// const onNoPress = () => {
//     setButton('no');
// }


// const onAddPost = () => {
//     //بالاتریت ایدی را پیدا کرده یکی به آن اضافه میکند
//     const newID = Math.max(...blogPosts.map((post) => post.id)) + 1;

//     setBlogPosts([...blogPosts, { title: 'c', id: newID }])
// }

// useEffect(() => {
//     console.log('useEffect has been called ', button);
// }, [button])

// useEffect(() => {
//     console.log('useEffect has been called ', blogPosts);
// }, [blogPosts])

// }

// export default Movie;
