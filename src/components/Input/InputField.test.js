import { render, screen } from "@testing-library/react"
import "../../../mocks/matchMedia.mock"
import Input from "./InputField"
import { Form } from "antd"

describe("InputField", () => {
  it("Input has label text", () => {
    render(
      <Form>
        <Input label="Description" id="description" />
      </Form>
    )
    expect(screen.getByText("Description")).toBeInTheDocument()
    expect(screen.getByLabelText("Description")).toHaveAttribute("type", "text")
  })

  it("input is in textarea format and has 3 rows", () => {
    render(
      <Form>
        <Input label="More info" id="more_info" textarea />
      </Form>
    )

    expect(screen.getByLabelText("More info")).toHaveAttribute("rows", "4")
    expect(screen.getByTestId("textarea")).toBeInTheDocument()
  })
})
