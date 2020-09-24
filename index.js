// DOM elements
const videoEl = document.getElementById('video');
const buttonEl = document.getElementById('button');

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoEl.srcObject = mediaStream;
		videoEl.onloadedmetadata = () => {
			videoEl.play();
		};
	} catch (error) {
		console.log(error);
	}
}

button.addEventListener('click', async () => {
	buttonEl.disabled = true;
	await videoEl.requestPictureInPicture();
	button.disabled = false;
});

selectMediaStream();
