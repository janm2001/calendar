import React from "react";
import { useNavigate } from "react-router-dom";

const CommitsDetails = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      key={item.node_id}
      className="commit-details"
      onClick={() => {
        return navigate("/commits/" + item.sha);
      }}
    >
      <h3>{item.commit?.message}</h3>
      <h6>{item.commit?.author.name}</h6>

      <p>{item.commit?.author.date}</p>
    </div>
  );
};

export default CommitsDetails;
