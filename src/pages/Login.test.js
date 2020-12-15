import { render, screen } from "@testing-library/react"
import Login from "./Login"
import "../../mocks/matchMedia.mock"

describe("<Login />", () => {
  beforeEach(() => {
    render(<Login />)
  })
  it("renders login form ", () => {
    expect(screen.queryByText("Login")).toBeInTheDocument()
  })
})
