window.addEventListener("keydown", function (event) {
	const sounds = {
		a: "clap.wav",
		s: "hihat.wav",
		d: "kick.wav",
		f: "openhat.wav",
		g: "boom.wav",
		h: "ride.wav",
		j: "snare.wav",
		k: "tom.wav",
		l: "tink.wav",
	};

	const keys = Object.keys(sounds);
	const eventKey = event.key;
	if (keys.includes(eventKey)) {
		const soundToPlay = sounds[eventKey];
		const audio = new Audio(`./sounds/${soundToPlay}`);
		audio.currentTime = 0;
		audio.play();
	}
});
