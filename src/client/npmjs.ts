import { ISO8601DateTime } from "@/types/common";
import qs from "qs";
import useSWR from "swr";

// https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md
export interface INpmPackageObjectData {
  package: {
    date: ISO8601DateTime;
    description: string;
    keywords: string[];
    links: {
      bugs: string;
      homepage: string;
      npm: string;
      repository: string;
    };
    maintainers: {
      username: string;
      email: string;
    }[];
    name: string;
    publisher: {
      username: string;
      email: string;
    };
    scope: string;
    version: string;
  };
  score: {
    detail: {
      maintenance: number;
      popularity: number;
      quality: number;
    };
    final: number;
  };
  searchScore: number;
}

export interface INpmPackagesResponse {
  objects: INpmPackageObjectData[];
  time: ISO8601DateTime;
  total: number;
}

export interface INpmPackagesParams {
  text: string;
  size?: number;
  from?: number;
  quality?: number /* 0 - 1 */;
  popularity?: number /* 0 - 1 */;
  maintenance?: number /* 0 - 1 */;
}

export const useNpmPackages = (options: INpmPackagesParams) => {
  const { text, ...params } = options;
  return useSWR<INpmPackagesResponse>(`https://registry.npmjs.org/-/v1/search?text=${text}&${qs.stringify(params)}`);
};
