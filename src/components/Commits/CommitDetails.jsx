import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const CommitDetails = ({ item }) => {
  console.log(item);
  return (
    <div key={item.node_id} className="commit-details-2">
      <h3>{item.commit?.message}</h3>
      <h4>{item.commit?.author.name}</h4>
      <img src={item.author?.avatar_url} alt="Profile" />
      <br />
      <a href="{item.commit?.url}">Commit link</a>
      <h4>Stats</h4>
      <div className="stats">
        <p>total : {item.stats?.total}</p>
        <p>
          <AiOutlinePlus /> : {item.stats?.additions}
        </p>
        <p>
          <AiOutlineMinus /> : {item.stats?.deletions}
        </p>
      </div>
      <p>{item.commit?.author.date}</p>
    </div>
  );
};

export default CommitDetails;
