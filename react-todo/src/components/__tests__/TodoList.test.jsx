import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todo1 = screen.getByText(/Learn React/i);
    const todo2 = screen.getByText(/Build Todo App/i);
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through"); // assuming you mark completed with line-through
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0]; // delete first todo
    const todoText = screen.getByText("Learn React");

    fireEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
