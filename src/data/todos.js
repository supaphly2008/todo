import { uuid } from "vue-uuid";

const todos = [
  {
    id: uuid.v1(),
    title: "feed my cat",
    isDone: false,
    createdTime: new Date(),
  },
  {
    id: uuid.v1(),
    title: "pay card",
    isDone: false,
    createdTime: new Date(),
  },
  {
    id: uuid.v1(),
    title: "take a rest",
    isDone: true,
    createdTime: new Date(),
  },
];

export default todos;
