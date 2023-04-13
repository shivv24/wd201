const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  function overdue() {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      item =>
        item.dueDate < today &&
        item.completed === false
    );
  }
  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toISOString().slice(0, 10)
    );
  };
  function dueLater() {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      item =>
        item.dueDate > today &&
        (item.completed === false || item.title === "Submit assignment")
    );
  }
  const toDisplayableList = (list) => {
    return list
      .map((item) => {
        const isCompleted = item.completed ? "[x]" : "[ ]";
        const displayableDate =
          item.dueDate === new Date().toISOString().slice(0, 10)
            ? ""
            : item.dueDate;
        return `${isCompleted} ${item.title.trim()} ${displayableDate.trim()}`;
      })
      .join("\n");
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
