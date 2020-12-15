import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer", () => {
  it("Footer has copyright text", () => {
    render(<Footer />)
    expect(screen.getByText("Company name © 2020")).toBeInTheDocument()
  })
})
