<script lang="ts">
	import { resolve } from '$app/paths';
	import Carousel from '#lib/Carousel.svelte';
	import ContactSection from '#lib/ContactSection.svelte';
	import { slides } from '#lib/slides.js';
</script>

<svelte:head>
	<title>Safety Spill Inc. — Home of the Tuff Tray</title>
	<meta name="description" content="Home of the Tuff Tray and other engineered plastic products. Safety Spill Inc., Edmonton, Alberta." />
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Safety Spill Inc.</p>
			<h1 id="hero-title">Home of the<br /><em>Tuff Tray.</em><sup class="trademark" aria-label="trademark">™</sup></h1>
			<p class="hero-summary">Proudly designed and manufactured end-to-end in Canada.</p>
			<a class="button" href={resolve('/products')}>Explore our products <span aria-hidden="true">↗</span></a>
		</div>
		<Carousel {slides} />
	</div>
</section>

<section class="container introduction" id="about" aria-label="About Safety Spill">
	<div class="introduction-content">
		<p class="intro-statement">You’ve tried the rest. Now put Safety Spill and our Tuff Trays to the test.</p>
		<p class="intro-copy">Based in Edmonton, Alberta, Safety Spill Inc. is home to the Tuff Tray and other engineered plastic products for the service and workover rig industry.</p>
		<a class="text-link" href={resolve('/about-us')}>More about Safety Spill →</a>
	</div>
</section>

<section class="contact-section" id="contact" aria-labelledby="contact-title">
	<div class="container">
		<h2 id="contact-title">Contact Safety Spill</h2>
		<ContactSection />
	</div>
</section>
