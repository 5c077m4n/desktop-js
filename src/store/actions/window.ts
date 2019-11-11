import { WindowActions } from './index';
import { uuid } from '../../assets/uuid';

export interface OpenWindow {
	type: WindowActions.WINDOW_OPEN;
	windowId: number | string;
	windowType: string;
	windowName: string;
}
export interface FocusWindow {
	type: WindowActions.WINDOW_FOCUS;
	windowId: number | string;
}
export interface CloseWindow {
	type: WindowActions.WINDOW_CLOSE;
	windowId: number | string;
}

export const openWindow = (windowType: string, windowName: string, windowId: number | string = uuid()) => (
	dispatch,
	_getState
) => {
	const action: OpenWindow = {
		type: WindowActions.WINDOW_OPEN,
		windowId,
		windowType,
		windowName,
	};
	dispatch(action);
};
export const focusWindow = (windowId: number | string) => (dispatch, _getState) => {
	const action: FocusWindow = {
		type: WindowActions.WINDOW_FOCUS,
		windowId,
	};
	dispatch(action);
};
export const closeWindow = (windowId: number | string) => (dispatch, _getState) => {
	const action: CloseWindow = {
		type: WindowActions.WINDOW_CLOSE,
		windowId,
	};
	dispatch(action);
};
