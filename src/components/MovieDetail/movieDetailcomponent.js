import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, config } from "../../constants/Api";
import axios from "axios";
import { startTransition } from 'react';

export default function MovieDetail() {

    const param = useParams();
    console.log(param);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // افزودن وضعیت خطا  

    const url = `${baseUrl}?where={%22objectId%22:%22${param.id}%22}`;
    //به عبارتی، این کد می‌گوید: "از سرور یا پایگاه داده، فقط داده‌هایی را دریافت کن که فیلد objectId آن‌ها برابر با مقدار ${param.id} است."



    useEffect(() => {
        setLoading(true);
        axios.get(url, config)
        .then(response => {
            console.log(response.data.results[0]);
            setData(response.data.results[0]);
            setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message); // وضعیت خطا را در state ذخیره می‌کند 
                console.log(error);
                alert(error);
            })
    }, [param.id]);


    if (loading) {
        return (
            <div className="bg-warning text-center">
                <p>درحال بارگذاری لطفا شکیبا باشید...</p>
            </div>
        );
    }

    if (error) {
        return (<div className="bg-danger text-center">
            <p>خطا در بارگذاری داده‌ها: {error}</p>
        </div>
        )
    }
    return (
        <div className="container border p-3 text-center">
            {data && (
                <>
                    {data.movie_img && <img src={data.movie_img} alt="img" />}
                    <h1>{data.movie_name}</h1>
                    <small>{data.year}</small>
                    <div className="des-item">
                        <p>{data.movie_des}</p>
                    </div>
                </>
            )}
        </div>
    );
}


