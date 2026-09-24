import { afterEach, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { ProjectRequestForm } from "./project-request-form";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("focuses accessible errors and never sends invalid input", async () => {
  const fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  render(<ProjectRequestForm />);
  fireEvent.click(screen.getByRole("button", { name: /Demo-Anfrage prüfen/ }));
  await screen.findByRole("alert");
  await waitFor(() => expect(screen.getByRole("alert")).toHaveFocus());
  expect(screen.getByLabelText(/Vorname/)).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  expect(screen.getByLabelText(/Vorname/)).toHaveAccessibleDescription();
  expect(fetchMock).not.toHaveBeenCalled();
});
