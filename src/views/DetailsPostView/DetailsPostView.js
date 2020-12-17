import { useParams } from "react-router-dom";
import { useState } from "react";
export default function DetailsPostView() {
  const [isIdValid, setIsIdValid] = useState(true);
  let { id } = useParams();

  if (!isIdValid) {
    return <div>No existe ese post</div>;
  }

  return <div>Post {id}</div>;
}
