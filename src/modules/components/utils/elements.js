/*
 * Toma un elemento HTML y le da un estado dado (focus, select, etc.)
 * @param {string} name of element to work with
 * @param {string} state to give to element
 */
export const setElementState = (name, state) => {
	setTimeout(() => {
		document.getElementsByName(name)[0][state]()
	}, 0)
}
