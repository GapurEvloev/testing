import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import Counter from "./Counter";

describe("counter test", () => {
  test("Test router", async () => {
    const { getByTestId } = render(
      <Provider store={createReduxStore({ counter: { value: 10 } })}>
        <Counter />
      </Provider>
    );
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });
});
