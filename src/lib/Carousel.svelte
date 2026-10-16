<script lang="ts">
	import { asset } from '$app/paths';
	import type { Slide } from './slides';
	let { slides }: { slides: Slide[] } = $props();
	let index = $state(0);
	const current = $derived(slides[index % slides.length]);
	function move(direction: number) {
		index = (index + direction + slides.length) % slides.length;
	}
</script>

{#if current}
	<section class="carousel" aria-label="Oilfield photo gallery" aria-roledescription="carousel">
		<div class="slide" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
			<img src={asset(current.src)} alt={current.alt} width="1600" height="1067" fetchpriority="high" />
		</div>
		<div class="photo-caption">
			{#if current.credit}<a href={current.credit.url}>Photo: {current.credit.name}</a>{/if}
			{#if slides.length > 1}
				<div class="carousel-controls">
					<button type="button" aria-label="Previous photo" onclick={() => move(-1)}>←</button>
					<span aria-live="polite" aria-atomic="true">{index + 1} / {slides.length}</span>
					<button type="button" aria-label="Next photo" onclick={() => move(1)}>→</button>
				</div>
			{/if}
		</div>
	</section>
{/if}
