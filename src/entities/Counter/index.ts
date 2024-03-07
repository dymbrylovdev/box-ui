import type { CounterSchema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';

export { counterReducer } from './model/slice/counterSlice';

export {
  CounterSchema,
  Counter,
};
