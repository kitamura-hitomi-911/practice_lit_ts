import { LitElement } from "lit";
test("btn", () => {
  const buttonElement = window.document.createElement("ss-btn") as LitElement;
  console.log("★", buttonElement.shadowRoot?.querySelector("button"));
  // Set up our document body
  document.body.innerHTML = "<ss-btn>ボタンラベル</ss-btn>";
  console.log(document.body.innerHTML);
  const tgtElm = document.getElementsByTagName("ss-btn");
  const btnElm = tgtElm[0].shadowRoot?.querySelector("button");
  console.log(tgtElm[0].shadowRoot?.textContent, btnElm?.textContent);
  console.log(tgtElm[0].textContent);
  expect(tgtElm[0]).toMatchSnapshot();

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  expect("aa").toBe("aa");
});
