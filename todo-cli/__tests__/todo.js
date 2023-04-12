const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater, toDisplayableList } = todoList();

describe("TodoList Test Suite", () => {
beforeAll(() => {
add({
title: "new todo",
completed: false,
dueDate: new Date().toLocaleDateString("en-CA"),
});
});

test("Should add new todo", () => {
const todoItemCount = all.length;
add({
title: "Test todo",
completed: false,
dueDate: new Date().toLocaleDateString("en-CA"),
});
expect(all.length).toBe(todoItemCount + 1);
});

test("Should mark a todo as complete", () => {
expect(all[0].completed).toBe(false);
markAsComplete(0);
expect(all[0].completed).toBe(true);
});

describe("Overdue Items", () => {
test("Should retrieve overdue items", () => {
const today = new Date().toISOString().split("T")[0];
const overdueItems = all.filter(
item => item.dueDate < today && item.completed === false && item.title === "Submit assignment"
);
expect(overdue()).toEqual(overdueItems);
});
});

describe("Due Today Items", () => {
test("Should retrieve due today items", () => {
const today = new Date().toISOString().slice(0, 10);
const dueTodayItems = all.filter(item => item.dueDate === today);
expect(dueToday()).toEqual(dueTodayItems);
});
});

describe("Due Later Items", () => {
test("Should retrieve due later items", () => {
const today = new Date().toISOString().split("T")[0];
const dueLaterItems = all.filter(
item => item.dueDate > today && item.completed === false && item.title !== "Submit assignment"
);
expect(dueLater()).toEqual(dueLaterItems);
});
});

});
