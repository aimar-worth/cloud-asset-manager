import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Dashboard from "./Dashboard"

let mockIsLoggedIn = false

jest.mock("../utils/useCheckLoggedIn.js", () => {
  return jest.fn(() => {
    isLoggedIn: mockIsLoggedIn
  })
})

const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe("<Dashboard />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
  })
  it("renders dashboard ", () => {
    mockIsLoggedIn = true
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Your assets")).toBeInTheDocument()
  })

  it("will forward to login page if user is not logged in", () => {
    mockIsLoggedIn = false
    expect(mockHistoryPush).toBeCalledTimes(1)
  })
})
