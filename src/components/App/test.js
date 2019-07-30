import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App, { Search } from "./index.js";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Search", () => {
  // test render without crashing.
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search>Search</Search>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // tạo 1 bản ghi snapshot của rendered component, bản ghi này sẽ được dùng để so sánh
  // với các bản kế tiếp, nếu component có chỉnh sửa thì trả về fail.
  test("has a valid snapshot", () => {
    const component = renderer.create(<Search>Search</Search>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
