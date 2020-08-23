import { v4 as uuidv4 } from 'uuid';
import { InternalServerErrorException } from '@nestjs/common';

let model = {
  type: 'Task',
  ids: [],
};

export const find = () => {
  return model.ids.map(id => model[id]);
};

export const findOne = taskId => {
  return model[taskId];
};

export const create = task => {
  const id = genId();

  const ids = [...model.ids, id];
  const createdTask = { ...task, id };

  model = { ...model, ids, [id]: createdTask };

  return findOne(id);
};

export const update = (taskId, updatedTask) => {
  const { _id, ...task } = updatedTask;

  const oldTask = findOne(taskId);

  if (!oldTask) {
    throw new Error('Given task does not exist.');
  }

  const newTask = { ...oldTask, ...task };

  model[taskId] = newTask;

  return findOne(taskId);
};

export const remove = taskId => {
  const oldTask = findOne(taskId);

  if (!oldTask) {
    throw new Error('Given task does not exist.');
  }

  const ids = model.ids.filter(id => id !== taskId);

  model = { ...model, ids };
  delete model[taskId];
};

const genId = () => {
  return uuidv4();
};
