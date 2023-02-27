import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

function addBox(boxList, height = "200px", width = "100px", color = "rgb(255, 87, 51)") {
    const heightInput = boxList.getByLabelText("Height (pixels 50-1000):");
    const widthInput = boxList.getByLabelText("Width (pixels 50-1000):");
    const backgroundColorInput = boxList.getByLabelText("Color:");
    fireEvent.change(backgroundColorInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Create Box");
    fireEvent.click(button);
}

it("can add new box", function* () {
    const boxList = render(<BoxList />);
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    addBox(boxList);
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    console.log(removeButton.parentElement.style);
    expect(removeButton.parentElement).toHaveStyle("background:", "rgb(255, 87, 51)");
    expect(removeButton.parentElement).toHaveStyle("height:", "200px");
    expect(removeButton.parentElement).toHaveStyle("width:", "200px");
})

it("can remove a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
})