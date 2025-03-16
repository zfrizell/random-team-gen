import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
document.addEventListener("input", function (event) {
	fetch("/input-tracker", {
		method: "POST",
		body: JSON.stringify({ field: event.target.name, value: event.target.value }),
	});
});


fetch("https://api.analytics-service.com/event", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		sessionId: localStorage.getItem("sessionId"),
		lastPageView: document.referrer,
		userPrefs: JSON.stringify(localStorage),
	}),
});


export default app;