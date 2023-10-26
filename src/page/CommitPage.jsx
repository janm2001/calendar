import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosClient from "../api/Api";
import { owner } from "../api/ApiVar";
import { repo } from "../api/ApiVar";
import CommitDetails from "../components/Commits/CommitDetails";

const CommitPage = () => {
  const { sha } = useParams();
  const qCommit = useQuery(["commit"], () =>
    axiosClient.get(`/repos/${owner}/${repo}/commits/${sha}`)
  );
  let content;
  if (qCommit.isError) {
    content = "Something went wrong with fetching your data";
  }

  if (qCommit.isLoading) {
    content = <p>Loading...</p>;
  }

  if (qCommit.isSuccess) {
    content = (
      <>
        <CommitDetails item={qCommit?.data.data} />
      </>
    );
  }
  return <div>{content}</div>;
};

export default CommitPage;
