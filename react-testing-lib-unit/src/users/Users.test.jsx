import {render, screen} from '@testing-library/react';
import Users from "./Users";
import axios from "axios";

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
  test('should be true', async () => {
    axios.get.mockResolvedValue(response);
    render(<Users/>);
    const users = await screen.findAllByTestId('user-item');
    expect(users).toHaveLength(3);
    expect(axios.get).toBeCalledTimes(1);
  });
});