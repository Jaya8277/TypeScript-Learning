import {fireEvent, render, screen} from "@testing-library/react";
import {Slider } from "./Slider";


describe("Test Silder", () => {
    it("Should have Next Button", () => {
        render(<Slider />)
        let Next = screen.getByText("Next")
        expect(Next).toBeInTheDocument()
    })
    it("Should have Previous Button", () => {
        render(<Slider />)
        let Next = screen.getByText("Next")
        fireEvent.click(Next)
        let Prev = screen.getByText("Prev")
        expect(Prev).toBeInTheDocument()
    })
    it("Should Update Question", () => {
        render(<Slider />)
        let Next = screen.getByText("Next")
        let Question = screen.getByTestId("Question")
        expect(Question).toHaveTextContent("Question: First Question")
        fireEvent.click(Next)
        expect(Question).toHaveTextContent("Question: Second Question")
    })
    it("Should Update Answer", () => {
        render(<Slider />)
        let Next = screen.getByText("Next")
        let Answer = screen.getByTestId("Answer")
        expect(Answer).toHaveTextContent("Answer: First Answer")
        fireEvent.click(Next)
        expect(Answer).toHaveTextContent("Answer: Second Answer")
    })
    it("Should Disable Next Button", () => {
        render(<Slider />)
        let Next = screen.getByText("Next")
        fireEvent.click(Next)
        fireEvent.click(Next)
        fireEvent.click(Next)
        expect(Next).toBeUndefined()
    })

})