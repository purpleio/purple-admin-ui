import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import "@testing-library/jest-dom"
import ProductListPage from "@/pages/sample/product/list";
import mockRouter from "next-router-mock";
import {when} from "jest-when";
import {useProducts} from "@/client/sample/product";
import dayjs from "dayjs";

jest.mock("@/client/sample/product");

describe("테이블 랜더링", () => {
  it("URL 파라메터가 없으면 1페이지에 해당하는 아이템을 5개씩 테이블에 보여준다", async () => {
    // given
    when(useProducts as jest.Mock).calledWith({
      page: 1
    }).mockReturnValue({
      data: {
        data: {
          page: {
            currentPage: 1,
            pageSize: 5,
            totalPage: 1,
            totalCount: 6
          },
          items: [
            {
              id: 1,
              code: "A0001",
              brand: "apple",
              name: "iPhone 14 Pro",
              price: 1550000,
              status: "SALE",
              createdAt: "2023-02-02T10:00:00+09:00",
              updatedAt: "2023-02-02T10:00:00+09:00",
            },
            {
              id: 2,
              code: "A0002",
              brand: "파타고니아",
              name: "클래식 레트로-X 후리스 플리스 자켓",
              price: 230000,
              status: "SALE",
              createdAt: "2023-02-02T11:00:00+09:00",
              updatedAt: "2023-02-02T11:00:00+09:00",
            },
            {
              id: 3,
              code: "A0003",
              brand: "다이슨",
              name: "dyson v15 detect complete",
              price: 1290000,
              status: "SOLDOUT",
              createdAt: "2023-02-02T12:00:00+09:00",
              updatedAt: "2023-02-02T12:00:00+09:00",
            },
            {
              id: 4,
              code: "A0004",
              brand: "Aēsop",
              name: "레저렉션 아로마틱 핸드 워시",
              price: 47000,
              status: "NOTSALE",
              createdAt: "2023-02-02T13:00:00+09:00",
              updatedAt: "2023-02-02T13:00:00+09:00",
            },
            {
              id: 5,
              code: "A0005",
              brand: "LUSH",
              name: "더티 보디 스프레이",
              price: 60000,
              status: "SALE",
              createdAt: "2023-02-02T14:00:00+09:00",
              updatedAt: "2023-02-02T14:00:00+09:00",
            },
          ]
        }
      }
    });

    // when
    await mockRouter.push("/sample/product/list");
    render(<ProductListPage/>)
    await waitFor(() => screen.getByTestId("product-table"));

    // then
    const productTable = screen.getByTestId("product-table");
    expect(productTable).toBeInTheDocument();

    // 테이블 헤더 확인
    const tableHeader = productTable.querySelector("thead > tr");
    expect(tableHeader).not.toBeNull();
    const headerColumns = (tableHeader as Element).querySelectorAll("th");
    expect(headerColumns).toHaveLength(7);
    expect(headerColumns[0]).toHaveTextContent("");
    expect(headerColumns[1]).toHaveTextContent("상품코드");
    expect(headerColumns[2]).toHaveTextContent("상품명");
    expect(headerColumns[3]).toHaveTextContent("금액");
    expect(headerColumns[4]).toHaveTextContent("판매상태");
    expect(headerColumns[5]).toHaveTextContent("생성일시");
    expect(headerColumns[6]).toHaveTextContent("수정일시");

    // 테이블 바디 확인
    const tableBodyRows = productTable.querySelectorAll("tbody > tr");
    expect(tableBodyRows).toHaveLength(6); // ant table은 컨텐츠이 담기지 않는 TR이 하나 존재하기 때문에 컨텐츠 + 1를 확인한다.

    const bodyRow1Columns = tableBodyRows[1].querySelectorAll("td");
    expect(bodyRow1Columns).toHaveLength(8);
    expect(bodyRow1Columns[2]).toHaveTextContent("A0001");
    expect(bodyRow1Columns[3]).toHaveTextContent("appleiPhone 14 Pro");
    expect(bodyRow1Columns[4]).toHaveTextContent("1,550,000원");
    expect(bodyRow1Columns[5]).toHaveTextContent("SALE");
    expect(bodyRow1Columns[6]).toHaveTextContent("2023/02/0210:00");
    expect(bodyRow1Columns[7]).toHaveTextContent("2023/02/0210:00");

    const bodyRow2Columns = tableBodyRows[2].querySelectorAll("td");
    expect(bodyRow2Columns).toHaveLength(8);
    expect(bodyRow2Columns[2]).toHaveTextContent("A0002");
    expect(bodyRow2Columns[3]).toHaveTextContent("파타고니아클래식 레트로-X 후리스 플리스 자켓");
    expect(bodyRow2Columns[4]).toHaveTextContent("230,000원");
    expect(bodyRow2Columns[5]).toHaveTextContent("SALE");
    expect(bodyRow2Columns[6]).toHaveTextContent("2023/02/0211:00");
    expect(bodyRow2Columns[7]).toHaveTextContent("2023/02/0211:00");

    const bodyRow3Columns = tableBodyRows[3].querySelectorAll("td");
    expect(bodyRow3Columns).toHaveLength(8);
    expect(bodyRow3Columns[2]).toHaveTextContent("A0003");
    expect(bodyRow3Columns[3]).toHaveTextContent("다이슨dyson v15 detect complete");
    expect(bodyRow3Columns[4]).toHaveTextContent("1,290,000원");
    expect(bodyRow3Columns[5]).toHaveTextContent("SOLDOUT");
    expect(bodyRow3Columns[6]).toHaveTextContent("2023/02/0212:00");
    expect(bodyRow3Columns[7]).toHaveTextContent("2023/02/0212:00");

    const bodyRow4Columns = tableBodyRows[4].querySelectorAll("td");
    expect(bodyRow4Columns).toHaveLength(8);
    expect(bodyRow4Columns[2]).toHaveTextContent("A0004");
    expect(bodyRow4Columns[3]).toHaveTextContent("Aēsop레저렉션 아로마틱 핸드 워시");
    expect(bodyRow4Columns[4]).toHaveTextContent("47,000원");
    expect(bodyRow4Columns[5]).toHaveTextContent("NOTSALE");
    expect(bodyRow4Columns[6]).toHaveTextContent("2023/02/0201:00");
    expect(bodyRow4Columns[7]).toHaveTextContent("2023/02/0201:00");

    const bodyRow5Columns = tableBodyRows[5].querySelectorAll("td");
    expect(bodyRow5Columns).toHaveLength(8);
    expect(bodyRow5Columns[2]).toHaveTextContent("A0005");
    expect(bodyRow5Columns[3]).toHaveTextContent("LUSH더티 보디 스프레이");
    expect(bodyRow5Columns[4]).toHaveTextContent("60,000원");
    expect(bodyRow5Columns[5]).toHaveTextContent("SALE");
    expect(bodyRow5Columns[6]).toHaveTextContent("2023/02/0202:00");
    expect(bodyRow5Columns[7]).toHaveTextContent("2023/02/0202:00");
  });

  it("URL 파라메터 page=2 이면 2페이지에 해당하는 아이템을 최대 5개를 테이블에 보여준다", async () => {
    // given
    when(useProducts as jest.Mock).calledWith({
      page: 2
    }).mockReturnValue({
      data: {
        data: {
          page: {
            currentPage: 1,
            pageSize: 5,
            totalPage: 1,
            totalCount: 6
          },
          items: [
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
          ]
        }
      }
    });

    // when
    await mockRouter.push("/sample/product/list?page=2");
    render(<ProductListPage/>)
    await waitFor(() => screen.getByTestId("product-table"));

    // then
    const productTable = screen.getByTestId("product-table");
    expect(productTable).toBeInTheDocument();

    // 테이블 바디 확인
    const tableBodyRows = productTable.querySelectorAll("tbody > tr");
    expect(tableBodyRows).toHaveLength(2); // ant table은 컨텐츠이 담기지 않는 TR이 하나 존재하기 때문에 컨텐츠 + 1를 확인한다.

    const bodyRow1Columns = tableBodyRows[1].querySelectorAll("td");
    expect(bodyRow1Columns).toHaveLength(8);
    expect(bodyRow1Columns[2]).toHaveTextContent("A0006");
    expect(bodyRow1Columns[3]).toHaveTextContent("블루보틀쓰리 아프리카스");
    expect(bodyRow1Columns[4]).toHaveTextContent("25,000원");
    expect(bodyRow1Columns[5]).toHaveTextContent("SALE");
    expect(bodyRow1Columns[6]).toHaveTextContent("2023/02/0203:00");
    expect(bodyRow1Columns[7]).toHaveTextContent("2023/02/0203:00");
  });
});

describe("버튼 이벤트", () => {
  it("상품 등록 버튼을 클릭하면 상품 등록 페이지로 이동한다", async () => {
    // given
    when(useProducts as jest.Mock).calledWith({
      page: 1
    }).mockReturnValue({});

    await mockRouter.push("/sample/product/list");
    render(<ProductListPage/>)
    await waitFor(() => screen.getByTestId("create-product-btn"));

    // when
    const button = screen.getByTestId("create-product-btn");
    fireEvent.click(button);

    // then
    expect(mockRouter).toMatchObject({
      pathname: "/sample/product/new",
      query: {},
    });
  });
});