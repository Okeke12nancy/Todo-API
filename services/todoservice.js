const { newTodo } = require("../model/models");

class RoomTypeService {
  async create(newTodoData) {
    const newTodoType = await newTodo.create(newTodoData);

    return newTodoType;
  }

  async findById(id) {
    const todo = await newTodo.findById(id);

    return todo;
  }

  async findAll(filter = {}) {
    const todos = await newTodo.find(filter);

    return todos;
  }

  async update(id, updateData = {}) {
    const todo = await newTodo.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
      runValidators: true,
    });

    return todo;
  }

  async delete(id) {
    const todo = await newTodo.findByIdAndRemove(id);
    return todo;
  }
}

module.exports = new RoomTypeService();
