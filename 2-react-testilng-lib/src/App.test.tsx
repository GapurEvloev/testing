import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("TEST APP RTL", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world!/i);
    const btnElement = screen.getByRole("button");
    const inputElement = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
  });

  test("learning find..., get..., query...", async () => {
    render(<App />);

    // // example with queryBy
    // const helloWorldElement = screen.queryByText(/hello2/i);
    // expect(helloWorldElement).toBeNull()

    // example with findBy
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement).toHaveStyle({ color: "red" });
  });

  test("CLICK EVENT", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-button");

    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId("value-title")).toHaveTextContent("");
    // fireEvent.input(input, {
    //   target: { value: "123123" },
    // });

    // userEvent closer to user behavior 
    userEvent.type(input, '123123');
    expect(screen.queryByTestId("value-title")).toHaveTextContent("123123");
  });
});
