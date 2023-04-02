import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from ".";

test("It shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find and element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion - make sure the component is doing

  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();
  // Try to render my component
  render(<UserForm onUserAdd={mock} />);
  // find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");
  // simulate typeing in an email
  user.click(emailInput);
  user.keyboard("jane@jane.com");
  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  user.click(button);

  // assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
