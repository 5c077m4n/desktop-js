import { WindowActions } from './index';

export interface OpenWindow {
	type: WindowActions.WINDOW_OPEN;
	windowId: number;
	windowType: string;
	windowName: string;
}

export const openWindow = (
	windowName: string,
	windowType: string,
	windowId: number
) => (dispatch, _getState) => {
	const action: OpenWindow = {
		type: WindowActions.WINDOW_OPEN,
		windowId,
		windowType,
		windowName,
	};
	dispatch(action);
};
