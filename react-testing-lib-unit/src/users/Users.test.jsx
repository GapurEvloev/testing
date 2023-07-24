import {render, screen} from '@testing-library/react';
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios');

describe('USERS TEST', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should be true', async () => {
    axios.get.mockResolvedValue(response);
    render(<Users/>);
    const users = await screen.findAllByTestId('user-item');
    expect(users).toHaveLength(3);
    expect(axios.get).toBeCalledTimes(1);
  });

  test('redirect to user details page', async () => {
    axios.get.mockResolvedValue(response);
    renderWithRouter(<Users/>);
    const users = await screen.findAllByTestId('user-item');
    expect(users).toHaveLength(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
  });
});