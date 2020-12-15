import { render, screen } from "@testing-library/react"
import Auth from "./Auth"

describe("Auth layout", () => {
  it("renders auth layout with children", () => {
    render(
      <Auth>
        <h1>Hello</h1>
      </Auth>
    )
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })
})
