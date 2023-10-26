import React from "react";
import Commits from "../components/Commits/Commits";

const CommitsPage = () => {
  return (
    <div>
      <h1 className="heading-h1">
        List of all commits for a TvzMc2 competition, project : SpotASpot
      </h1>
      <Commits />
    </div>
  );
};

export default CommitsPage;
