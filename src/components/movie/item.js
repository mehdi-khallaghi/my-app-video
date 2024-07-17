import { Link } from "react-router-dom";
export default function ({ img, title, year,des,id }) {
    return (
        <div className='col-sm-3 my-2'>
            <div className="card bg-white">
                <img src={img} className="card-img-top" alt="Movie5" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <div className="card-text">
                        <h5>{year}</h5>
                        <span className="des">{des}</span>
                    </div>
                    <Link to={"movie-detail/"+id} className="detail-link">جزییات بیشتر</Link>
                </div>
            </div>
        </div>
    );
}