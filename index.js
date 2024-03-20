import { EventEmitter } from 'eventemitter3';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import dotenv from 'dotenv';

dotenv.config();

class AspectAssembler extends EventEmitter {
  constructor() {
    super();
    this.components = {};
  }

  registerComponent(name, component) {
    const id = uuidv4();
    this.components[id] = { name, component };
    this.emit('componentRegistered', { id, name });
    return id;
  }

  getComponent(id) {
    return _.get(this.components, `[${id}].component`, null);
  }

  async fetchData(url) {
    try {
      const response = await axios.get(url);
      this.emit('dataFetched', response.data);
      return response.data;
    } catch (error) {
      this.emit('fetchError', error);
      throw error;
    }
  }
}

export default AspectAssembler;
