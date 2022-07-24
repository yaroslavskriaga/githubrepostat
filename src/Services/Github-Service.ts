import { AxiosResponse } from 'axios';
import { httpGet } from './HTTP-Service';
import { API_GITHUB_REPO, API_GITHUB_REPO_SHA } from '../Api/Api';
import { RepositoryInterface, TreeItemInterface } from '../Api/Interfaces';

const getRepo = (owner: string, repo: string, branch: string): Promise<RepositoryInterface> => httpGet(API_GITHUB_REPO(owner, repo, branch))
  .then((data: AxiosResponse<RepositoryInterface>) => data.data);

const getRepoSHA = (owner: string, repo: string, sha: string): Promise<TreeItemInterface> => httpGet(API_GITHUB_REPO_SHA(owner, repo, sha))
  .then((data: AxiosResponse<TreeItemInterface>) => data.data);

const GithubService = {
  getRepo,
  getRepoSHA,
};

export default GithubService;
