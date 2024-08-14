import { SSRProvider } from "@react-aria/ssr";
import { render } from "@testing-library/react";

import Root from "../../Root";

export function renderApp() {
  const rootElement = document.createElement("div");
  rootElement.id = "root";
  return render(
    <SSRProvider>
      <Root />
    </SSRProvider>,
    { container: document.body.appendChild(rootElement) }
  );
}
