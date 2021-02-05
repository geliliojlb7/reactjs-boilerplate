import React from "react";
import { shallow } from "enzyme";
import Home from "./index";
const home = "Home";
let wrapped = shallow(<Home>{home}</Home>);

describe("Home", () => {
    it("should render the Title Component correctly", () => {
        expect(wrapped).toMatchSnapshot();
    });
    it("renders the Titles children", () => {
        expect(wrapped.find("div").text()).toEqual(home);
    });
});
