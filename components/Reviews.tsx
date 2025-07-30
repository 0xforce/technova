import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Best Leads I've Found",
    content:
      "I booked 6 discovery calls the first week—2 closed at $5,000 each. Game changer!",
    author: "Lauren S.",
    designation: "Mindset Coach",
  },
  {
    rating: 5,
    title: "Unmatched Lead Quality",
    content:
      "Their leads are 🔥. The quality is unmatched.",
    author: "Miguel T.",
    designation: "Fitness Trainer",
  },
  {
    rating: 5,
    title: "Changed How I Market",
    content:
      "I tried Facebook ads for months. TechNova delivered more in 10 days than I got in 3 months.",
    author: "Jenny H.",
    designation: "Life Coach",
  },
  {
    rating: 5,
    title: "Scaled My Business Fast",
    content:
      "Went from 3 clients to 12 in 2 months. The leads are pre-qualified and ready to invest.",
    author: "Sarah K.",
    designation: "Business Coach",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          What Our Coaches Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
