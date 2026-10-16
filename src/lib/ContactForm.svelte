<script lang="ts">
	let { id = 'contact' }: { id?: string } = $props();
	let status = $state('');

	function prepareEmail(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
		window.location.href = `mailto:greg@safetyspill.com?subject=${encodeURIComponent('Safety Spill enquiry')}&body=${encodeURIComponent(body)}`;
		status = 'Your email app should open with your message. Please send it there. If it does not open, email greg@safetyspill.com directly.';
	}
</script>

<form class="contact-form" action="mailto:greg@safetyspill.com" method="post" enctype="text/plain" onsubmit={prepareEmail} aria-labelledby={`${id}-heading`}>
	<h2 id={`${id}-heading`}>Send an enquiry</h2>
	<label for={`${id}-name`}>Name</label>
	<input id={`${id}-name`} name="name" autocomplete="name" />
	<label for={`${id}-email`}>Email <span aria-hidden="true">*</span></label>
	<input id={`${id}-email`} name="email" type="email" autocomplete="email" required />
	<label for={`${id}-message`}>Message</label>
	<textarea id={`${id}-message`} name="message" rows="5"></textarea>
	<p class="form-note" id={`${id}-note`}>This opens a prepared email in your email app. You’ll need to send it there.</p>
	<button class="button" type="submit" aria-describedby={`${id}-note`}>Prepare email <span aria-hidden="true">↗</span></button>
	<p class="form-status" role="status">{status}</p>
	<noscript><p>Email us directly at <a href="mailto:greg@safetyspill.com">greg@safetyspill.com</a>.</p></noscript>
</form>
