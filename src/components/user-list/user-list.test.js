import { render, screen, within } from "@testing-library/react";
import UserList from "./index";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "same", email: "same@same.com" },
  ];
  const { container } = render(<UserList users={users} />);
  return { users, container };
}

test("render one row per user", () => {
  // Render the component
  const { container } = renderComponent();
  const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();
  // screen.logTestingPlaygroundURL();
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
