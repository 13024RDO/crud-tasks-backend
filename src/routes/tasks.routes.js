import { Router } from "express"
const tasksRouters = Router();
import {getTasks,getTasksById,postTasks,deleteTasksbyID,putTasks } from "../controllers/tasks.controllers.js"
import {validateCreate, validateUpdate, validateDelete} from "../validators/task.validation.js"




tasksRouters.get('/',getTasks )

tasksRouters.get('/:id',getTasksById)

tasksRouters.post('/',validateCreate ,postTasks );

tasksRouters.put('/:id' ,validateUpdate,putTasks )

tasksRouters.delete('/:id',validateDelete,deleteTasksbyID )

export {tasksRouters};