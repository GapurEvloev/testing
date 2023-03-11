import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import Users from "./Users";

jest.mock("axios");

type AxiosResponse = {
  data: Array<{
    id: number,
    name: string,
  }>
}

describe("USERS TEST", () => {
  let response: AxiosResponse;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  test("renders learn react link", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    render(<Users/>);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });

  test("test redirect ot details page", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderWithRouter(<Users/>)
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
