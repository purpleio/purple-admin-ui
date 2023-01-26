import useSWR from "swr";

export interface IDashboardResponse {
  visitor: {
    value: number;
    rate: number;
  };
  order: {
    value: number;
    rate: number;
  };
  income: {
    value: number;
    rate: number;
  };
}

export const useDashboard = () => {
  return useSWR<IDashboardResponse>(`/api/sample/dashboard`);
};
