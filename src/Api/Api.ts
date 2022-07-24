export const API_GITHUB_REPO = (owner: string, repo: string, branch: string) => `repos/${owner}/${repo}/git/trees/${branch}`;
export const API_GITHUB_REPO_SHA = (owner: string, repo: string, sha: string) => `repos/${owner}/${repo}/git/trees/${sha}`;
