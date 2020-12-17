import Title from "../../components/Title";
import "./HomeView.css";
export default function HomeView() {
  return (
    <div className="container">
      <div className="post">
        <Title>Post</Title>
      </div>
      <div className="post-date">
        <Title>Post Dates</Title>
        <div>10 de enero de 2020</div>
      </div>
    </div>
  );
}
