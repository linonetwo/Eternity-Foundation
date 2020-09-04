import { RematchDispatch, RematchRootState } from '@rematch/core';

import createStore from './createStore';
import { RootModel } from './rootModelType';

import { debug } from './models/debug';
import { mod } from './models/mod';

const models: RootModel = { debug, mod };
export const store = createStore(models);

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export { history } from './createStore';
