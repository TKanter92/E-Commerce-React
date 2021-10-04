import React, {useEffect, useState} from 'react';
import axios from "axios";
// import { FaStar } from "react-icons/fa";

const ReviewForm = (props) => {

    const [getReviews, setGetReviews]= useState({
        body: '',
        reviewId: props.reviewId
    })

    const [postReview, setPostReply]= useState([])
    // const [rating, setRating] = useState(0);
    // const [hover, setHover]

    // Star rating
    // const changeRating = (newRating) => {
        // setRating(newRating);
        // onChange?.(newRating);
        
    

    useEffect(()=>{
        fetchReviews();
    },[getReviews, postReview]);

    useEffect(()=> {
    },[getReviews, postReview])

    // Get Reviews
    async function fetchReviews () {
        await axios.get("https://localhost:44394/api/review/")
        .then((response)=> {setPostReply(response.data)})
        setGetReviews({
            ...getReviews,
            reviewId:props.reviewId
        })
    }

   
    const handleChange= (event)=> {
        const newReviews={
            ...getReviews,
            [event.target.name]: event.target.value
        }
        setGetReviews(newReviews);
    }

    const handleSubmit= (event)=> {
        event.preventDefault()
        axios.post("https://localhost:44394/api/review", getReviews)
    }


    return ( 

        <div>
            <h2 className="review">Review</h2>
            <h4 className="rating"> Rating:</h4>
                
                {/* <span> */}
                    {/* {[1, 2, 3, 4, 5].map((value)=> (
                    <FaStar className="star" color="#f6e58d"
                        key={value}
                        filled={value <= rating}
                        onClick={()=> changeRating(value)}
                        />
                    ))} */}
                    {/* </span>  */}
            <div className="reviews">
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" name="text" className="form-control" onInput={handleChange} value={getReviews.body}/>
                    <button type="submit" className="btn btn-dark btn-sm"> Submit</button>

                </form>
                {postReview.map((postReview)=>(
                    <div>
                        {postReview.text}
                    </div>
                ))}
            </div>
        </div>
    )  
}


export default ReviewForm