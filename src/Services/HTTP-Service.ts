import axios, { AxiosResponse } from 'axios';
import { API_BASE, GITHUB_AUTH_TOKEN } from '../Shared/config';

export async function httpGet(url: string): Promise<AxiosResponse<any>> {
  const request = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${GITHUB_AUTH_TOKEN}`,
    },
  }).get((url));

  request.catch((error) => {
    let errorMessage = '[HTTP-Service Internal Error]';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
  });

  return request;
}
