import type { NextApiRequest, NextApiResponse } from "next";
import { productSampleItems } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // 생성
    return res.status(204).json({
      code: 0,
      message: "OK",
    });
  } else if (req.method === "PUT") {
    // 수정
    return res.status(200).json({
      code: 0,
      message: "OK",
    });
  } else if (req.method === "DELETE") {
    // 삭제
    return res.status(200).json({
      code: 0,
      message: "OK",
    });
  } else {
    // 조회
    const item = productSampleItems.find((data) => String(data.id) === req.query.id);

    if (!item) {
      return res.status(400).json({
        code: -1,
        message: "상품 정보를 찾을 수 없습니다.",
        data: {},
      });
    }

    return res.status(200).json({
      code: 0,
      message: "OK",
      data: item,
    });
  }
}
