import dotenv from 'dotenv';
dotenv.config();

export class profile {
    constructor() {
      this.character = 'Jungso';
      this.token = process.env.TOKEN;
    }
  }
  