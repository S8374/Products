import Reveiwer from "../Reviewer/Reveiwer";

const ReviewsCard = ({item}) => {
    const {reviews} = item
    return (
        <div>
             {
                reviews.map(review => <Reveiwer review={review}></Reveiwer> )
             }
        </div>
    );
};

export default ReviewsCard;