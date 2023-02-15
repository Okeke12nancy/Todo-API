const _ = require("lodash");
const todoService = require("../services/todoservice");

class TodoController {
  async create(req, res) {
    const newTodo = await todoService.create(req.body);
    return res.status(201).send({
      success: true,
      message: "Todo created successfully",
      data: newTodo,
    });
  }

  async findById(req, res) {
    const todo = await todoService.findById(req.params.id);

    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "todo not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "todo found successfully",
      data: todo,
    });
  }

  async findAll(req, res) {
    const todos = await todoService.findAll();

    if (_.isEmpty(todos)) {
      return res.status(404).send({
        success: false,
        message: "Todos not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Todos found successfully",
      data: todos,
    });
  }

  // async findAll(req, res) {
  //   const todos = await todoService.findAll({});

  //   if (!todos) {
  //     return res.status(404).send({
  //       success: false,
  //       message: "Todos not found",
  //     });
  //   }

  //   return res.status(200).send({
  //     success: true,
  //     message: "Todos found",
  //     data: todos,
  //   });
  // }
  async update(req, res) {
    const todo = await todoService.update(req.params.id, req.body);
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "todo not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "todo updated successfully",
      data: todo,
    });
  }

  async delete(req, res) {
    const todo = await todoService.delete(req.params.id);
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "todo not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "todos deleted successfully",
      data: todo,
    });
  }
}

module.exports = new TodoController();
