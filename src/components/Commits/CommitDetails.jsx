import React from "react";

const CommitDetails = ({ item }) => {
  console.log(item);
  return (
    <div key={item.node_id} className="commit-details">
      <h3>{item.commit?.message}</h3>
      <h6>{item.commit?.author.name}</h6>

      <p>{item.commit?.author.date}</p>
    </div>
  );
};

export default CommitDetails;
