const { render } = require("@testing-library/react");
import App from "../App"

describe("<App />", () => {
    it("Renders <App /> component correctly", () => {
      render(<App />);
    });
  });