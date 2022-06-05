import {fireEvent,render, screen} from "@testing-library/react";
import {Counter} from "./Counter";
import App from "../App";

describe("Counter testing", function () {
    it("Should have a button", function () {
        render(<Counter>Click me</Counter>);
        let button = screen.getByText("Click me");

        expect(button).toBeInTheDocument();
    });

    it("Should add 5", function () {
        render(<App></App>);

        let h1 = screen.getByText("Count:0");

        let button = screen.getByText("ADD");
        fireEvent.click(button);

        expect (h1).toHaveTextContent("Count:5");
    });

    it("Should add 5 3times", function () {
        render (<App></App>);

        let h1 = screen.getByText("Count:0");

        let button = screen.getByText("ADD");
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        expect(h1).toHaveTextContent("Count:15");
    });

    it("Should reduce 5", function () {
        render(<App></App>);

        let h1 = screen.getByText("Count:0");

        let button = screen.getByText("Reduce");
        fireEvent.click(button);
        expect(h1).toHaveTextContent("Count:0");
    });

    it("Should reduce 5 4times", function () {
        render(<App></App>);

        let h1 = screen.getByText("Count:0");

        let button = screen.getByText("Reduce");
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        expect(h1).toHaveTextContent("Count:-20");
    });
});