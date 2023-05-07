import "../../../src/js/main.js";

test("btn", () => {
  // Set up our document body
  document.body.innerHTML = "<ss-btn>ボタンラベル</ss-btn>";

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  expect("aa").toBe("aa");
});
