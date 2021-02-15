describe("App e2e tests", () => {
  const page = global.page;
  let todoListLength, newTodoListLength;
  test("Title", async () => {
    await expect(page.title()).resolves.toMatch("Todo list");
  });
  test("add new todo", async () => {
    const nameTodo = "New Todo";
    todoListLength = await page.evaluate(
      () => document.querySelectorAll(".todos-item").length
    );

    await page.type("input", nameTodo);
    await page.click(".add");

    const inputValue = await page.evaluate(
      () => document.querySelector("input").value
    );
    newTodoListLength = await page.evaluate(
      () => document.querySelectorAll(".todos-item").length
    );
    const nameNewTodo = await page.evaluate(
      () => document.querySelector(".todos-item:last-child").innerText
    );
    expect(inputValue).toBe("");
    expect(newTodoListLength === todoListLength + 1).toBe(true);
    expect(nameNewTodo.includes(nameTodo)).toBe(true);
  });
  test("delete todo", async () => {
    todoListLength = await page.evaluate(
      () => document.querySelectorAll(".todos-item").length
    );
    const deletedTodo = await page.evaluate(
      () =>
        document.querySelector(".todos-item:nth-child(2)").childNodes[0]
          .textContent
    );

    await page.click(".todos-item:nth-child(2)>button");

    const remainingTodo = await page.evaluate(() => {
      const arr = [];
      document.querySelectorAll(".todos-item").forEach((item) => {
        arr.push(item.childNodes[0].textContent);
      });
      return arr;
    });

    const newTodoListLength = await page.evaluate(
      () => document.querySelectorAll(".todos-item").length
    );

    expect(newTodoListLength === todoListLength - 1).toBe(true);
    expect(remainingTodo.includes(deletedTodo)).toBe(false);
  });
});
