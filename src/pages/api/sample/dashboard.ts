import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
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
};

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomRate = (min: number, max: number) => {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    visitor: {
      value: getRandomInt(1000, 10000),
      rate: getRandomRate(-10, 50),
    },
    order: {
      value: getRandomInt(10, 1000),
      rate: getRandomRate(-10, 50),
    },
    income: {
      value: getRandomInt(1000000, 10000000),
      rate: getRandomRate(-10, 50),
    },
  });
}
