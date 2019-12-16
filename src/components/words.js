var PROGRAMING_LANG = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"html",
	"css",
	"ruby",
	"react",
	"codecons",
	"vukovar",
	"cococar",
	"cocomansion"
];

function randomWord() {
	return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };
