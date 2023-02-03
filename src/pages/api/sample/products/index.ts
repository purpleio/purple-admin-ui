import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";

export const productSampleItems = [
  {
    id: 1,
    code: "A0001",
    brand: "apple",
    name: "iPhone 14 Pro",
    price: 1550000,
    status: "SALE",
    createdAt: dayjs("2023-02-02T10:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T10:00:00+09:00"),
  },
  {
    id: 2,
    code: "A0002",
    brand: "파타고니아",
    name: "클래식 레트로-X 후리스 플리스 자켓",
    price: 230000,
    status: "SALE",
    createdAt: dayjs("2023-02-02T11:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T11:00:00+09:00"),
  },
  {
    id: 3,
    code: "A0003",
    brand: "다이슨",
    name: "dyson v15 detect complete",
    price: 1290000,
    status: "SOLDOUT",
    createdAt: dayjs("2023-02-02T12:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T12:00:00+09:00"),
  },
  {
    id: 4,
    code: "A0004",
    brand: "Aēsop",
    name: "레저렉션 아로마틱 핸드 워시",
    price: 47000,
    status: "NOTSALE",
    createdAt: dayjs("2023-02-02T13:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T13:00:00+09:00"),
  },
  {
    id: 5,
    code: "A0005",
    brand: "LUSH",
    name: "더티 보디 스프레이",
    price: 60000,
    status: "SALE",
    createdAt: dayjs("2023-02-02T14:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T14:00:00+09:00"),
  },
  {
    id: 6,
    code: "A0006",
    brand: "블루보틀",
    name: "쓰리 아프리카스",
    price: 25000,
    status: "SALE",
    createdAt: dayjs("2023-02-02T15:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T15:00:00+09:00"),
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = req.query.page ? Number(req.query.page) : 1;

  res.status(200).json({
    code: 0,
    message: "OK",
    data: {
      items: page === 1 ? productSampleItems.slice(0, 5) : [productSampleItems[5]],
      page: {
        currentPage: page,
        pageSize: 5,
        totalPage: 1,
        totalCount: productSampleItems.length,
      },
    },
  });
}
