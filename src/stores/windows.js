import { writable } from 'svelte/store';

import { uuid } from '../libs/uuid';

class WindowEl {
	constructor(type, name) {
		this.id = uuid();
		this.type = type;
		this.name = name;
	}
}

function createWindowList() {
	const { subscribe, set, update } = writable([new WindowEl(123, 123)]);

	return {
		subscribe,
		add: ({ name, type }) =>
			update(winList => winList.concat(new WindowElement(name, type))),
		remove: id => update(winList => winList.filter(win => win.id !== id)),
		clear: () => set([]),
	};
}

export const windowList = createWindowList();
