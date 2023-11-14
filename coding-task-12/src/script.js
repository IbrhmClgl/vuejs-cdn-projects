const API_URL = "http://localhost:4730/todos";

const app = Vue.createApp({
  data() {
    return {
      header: "Todo App",
      todos: [],
      newTodoDescription: "",
      currentFilter: "all",
    };
  },
  methods: {
    refresh() {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.todos = data;
        });
    },
    onTodoChange(todo) {
      // change done status
      fetch(`${API_URL}/${todo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          done: todo.done,
        }),
      }).finally(() => {
        this.refresh();
      });
    },
    async deleteTodo() {
      const doneTodos = this.todos.filter((todo) => todo.done);

      await Promise.all(
        doneTodos.map((todo) => {
          return fetch(`${API_URL}/${todo.id}`, {
            method: "DELETE",
          }).then(() => {
            this.refresh();
          });
        })
      ).then(() => {});
      this.refresh();
    },
    onSubmit() {
      // check for duplicates
      if (
        this.todos.some((todo) => todo.description === this.newTodoDescription)
      ) {
        alert("This todo exists already!");
        this.newTodoDescription = "";
        return;
      }

      // check if todo.length is greater than 5
      if (this.newTodoDescription.length < 5) {
        alert("Please use mor than 5 character for your todo !");
        this.newTodoDescription = "";
        return;
      }

      // post the input to the backend
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: this.newTodoDescription,
          done: false,
        }),
      }).then(() => {
        this.refresh();
        this.newTodoDescription = "";
      });
    },
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => {
        if (this.currentFilter === "Open") {
          return !todo.done;
        }
        if (this.currentFilter === "Done") {
          return todo.done;
        }

        return true;
      });
    },
  },
  mounted() {
    console.log("mounted");
    this.refresh();
  },
});

app.mount("#app");
