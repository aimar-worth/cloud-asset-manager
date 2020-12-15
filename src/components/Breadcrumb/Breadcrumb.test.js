import { render, screen } from "@testing-library/react"
import Breadcrumb from "./Breadcrumb"

describe("Breadcrum", () => {
  const crums = [
    {
      id: 1,
      title: "toplevel",
    },
    {
      id: 2,
      title: "second level",
    },
    {
      id: 3,
      title: "third level",
    },
  ]
  it("breadcrumb has 3 levels", () => {
    render(<Breadcrumb crums={crums} />)
    expect(screen.getByText("toplevel")).toBeInTheDocument()
    expect(screen.getByText("second level")).toBeInTheDocument()
    expect(screen.getByText("third level")).toBeInTheDocument()
  })
})
