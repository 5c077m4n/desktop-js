import { writable } from 'svelte/store';

class WindowEl {
	constructor(type, name) {
		this.id = Symbol('window-instace');
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
