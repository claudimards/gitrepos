import { useContext } from "react";
import { GithubContext } from "../providers";

const useGithub = () => {
  const { githubState } = useContext(GithubContext);

  return { githubState };
};

export default useGithub;
