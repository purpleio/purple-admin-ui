import { INpmPackageObjectData, INpmPackagesResponse } from "@/client/npmjs";
import DefaultTable from "@/components/shared/ui/default-table";
import { ISO8601DateTime } from "@/types/common";
import { ColumnsType } from "antd/lib/table/interface";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

interface IListTableProps {
  data?: INpmPackagesResponse;
  isLoading: boolean;
}

const columns: ColumnsType<INpmPackageObjectData> = [
  {
    title: "패키지명",
    dataIndex: ["package", "name"],
    render: (value: string) => {
      return `📦 ${value}`;
    },
  },
  {
    title: "버전",
    dataIndex: ["package", "version"],
    align: "center",
    width: 100,
  },
  {
    title: "키워드",
    dataIndex: ["package", "keywords"],
    width: 200,
    render: (value: string[]) => {
      if (!value) {
        return "-";
      }

      return value?.join(", ");
    },
  },
  {
    title: "제작",
    dataIndex: ["package", "publisher", "username"],
    width: 160,
  },
  {
    title: "업데이트",
    dataIndex: ["package", "date"],
    align: "center",
    width: 120,
    render: (value: ISO8601DateTime) => {
      return dayjs(value).format("YYYY/MM/DD");
    },
  },
];

const ListTable = ({ data, isLoading }: IListTableProps) => {
  const router = useRouter();
  const handleChangePage = useCallback(
    (pageNumber: number) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: pageNumber },
      });
    },
    [router]
  );

  return (
    <DefaultTable<INpmPackageObjectData>
      columns={columns}
      dataSource={data?.objects || []}
      loading={isLoading}
      pagination={{
        current: Number(router.query.page || 1),
        defaultPageSize: 20,
        total: data?.total || 0,
        showSizeChanger: false,
        onChange: handleChangePage,
      }}
      className="mt-3"
      rowKey={(record: INpmPackageObjectData) => record.package.name}
    />
  );
};

export default React.memo(ListTable);
