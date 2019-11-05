import { OpenWindow } from './window';

export enum WindowActions {
	WINDOW_OPEN = 'WINDOW_OPEN',
	WINDOW_RESIZE = 'WINDOW_RESIZE',
	WINDOW_MINIMIZE = 'WINDOW_MINIMIZE',
	WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE',
	WINDOW_CLOSE = 'WINDOW_CLOSE',
}

export enum TypeKeys {
	NULL = 'NULL',
	ERROR = 'ERROR',
}

export interface NullAction {
	type: TypeKeys.NULL;
}

export type ActionTypes = NullAction | OpenWindow;
