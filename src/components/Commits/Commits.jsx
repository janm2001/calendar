import React from "react";
import { useQuery } from "react-query";
import axiosClient from "../../api/Api";
import CommitDetails from "./CommitDetails";

const Commits = ({ selectedDate }) => {
  const owner = "janm2001";
  const repo = "SpotASpot";
  const qCommits = useQuery(["commits"], () =>
    axiosClient.get(`/repos/${owner}/${repo}/commits`)
  );

  let content;
  if (qCommits.isError) {
    content = "Something went wrong with fetching your data";
  }

  if (qCommits.isLoading) {
    content = <p>Loading...</p>;
  }

  if (qCommits.isSuccess) {
    content = (
      <>
        {qCommits?.data.data.map((item) => (
          <CommitDetails item={item} />
        ))}
      </>
    );
  }

  return (
    <div>
      <h1>Commits</h1>
      {content}
    </div>
  );
};

export default Commits;
