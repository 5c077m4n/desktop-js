import { OpenWindow, FocusWindow, CloseWindow } from './window';

export enum WindowActions {
	WINDOW_OPEN = 'WINDOW_OPEN',
	WINDOW_RESIZE = 'WINDOW_RESIZE',
	WINDOW_MINIMIZE = 'WINDOW_MINIMIZE',
	WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE',
	WINDOW_CLOSE = 'WINDOW_CLOSE',
	WINDOW_FOCUS = 'WINDOW_FOCUS',
}

export enum TypeKeys {
	NULL = 'NULL',
	ERROR = 'ERROR',
}

export interface NullAction {
	type: TypeKeys.NULL;
}
export interface ErrorAction {
	type: TypeKeys.ERROR;
}

export type ActionTypes = NullAction | ErrorAction | OpenWindow | FocusWindow | CloseWindow;
