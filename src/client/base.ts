import ky from "ky-universal";

export const fetcher = (input: URL | RequestInfo, init?: RequestInit | undefined) =>
  ky(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${input}`, init).then((res) => res.json());

export const fetchApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
