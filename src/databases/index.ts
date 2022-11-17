import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  url: `mongodb+srv://To-Do:To-Do@cluster0.2xc6zcu.mongodb.net/?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};
