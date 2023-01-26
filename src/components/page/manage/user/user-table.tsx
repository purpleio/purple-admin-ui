import { Table } from "antd";
import React from "react";

interface IUserTableProps {
  users: any;
}

const columns: any = [
  {
    title: "사용자 ID",
    dataIndex: "login",
    align: "center",
  },
  {
    title: "이름",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "권한",
    dataIndex: "role",
    align: "center",
  },
  {
    title: "생성일시",
    dataIndex: "created_at",
    align: "center",
    render: () => {
      return "2023-01-01 00:00";
    },
  },
  {
    title: "",
    dataIndex: "id",
    align: "center",
    width: 100,
    fixed: "right",
    render: (value: number, record: any) => {
      return (
        <div className="flex justify-center gap-2">
          <>
            <a>수정</a>
            <a>삭제</a>
          </>
        </div>
      );
    },
  },
];

const UserTable = ({ users }: IUserTableProps) => {
  return (
    <Table
      columns={columns}
      dataSource={users}
      className="mt-3"
      size="small"
      rowKey="id"
      tableLayout="fixed"
      bordered
    />
  );
};

export default React.memo(UserTable);
