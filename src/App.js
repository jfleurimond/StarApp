import "./styles.css";
import { FaStar } from "react-icons/fa";

export default function App() {
  function Star() {
    return <FaStar color="red" />;
  }

  function LengthOfStarRating(length) {
    return [...Array(length)];
  }

  function CreateStars({ totalStars = 5 }) {
    return LengthOfStarRating(totalStars).map((n, i) => <Star />);
  }
  return <CreateStars totalStars={3} />;
}
