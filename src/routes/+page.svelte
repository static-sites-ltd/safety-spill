<script lang="ts">
	import { asset } from '$app/paths';
	import Carousel from '#lib/Carousel.svelte';
	import ContactForm from '#lib/ContactForm.svelte';
	import { slides } from '#lib/slides.js';
	const products = [
		{ name: 'Pipe Tube Tray', code: 'PTT-36-006', file: 'assets/brochures/PTT-36-006.pdf' },
		{ name: 'Yellow Line Pipe Tray', code: 'LPT-001', file: 'assets/brochures/LPT-001 Brochure.pdf' },
		{ name: 'Blue Line Pipe Tray', code: 'LPT-002', file: 'assets/brochures/LPT-002 Brochure.pdf' },
		{ name: 'Yellow Drip Tray', code: 'DT-002', file: 'assets/brochures/DT-002 Brochure.pdf' },
		{ name: 'Blue Drip Tray with Spout', code: 'VDT-001', file: 'assets/brochures/VDT-001 Brochure.pdf' },
		{ name: 'Electrical Pipe Stand', code: 'EPS-001', file: 'assets/brochures/EPS-001 Brochure.pdf' },
		{ name: 'Recycled Mat with Holes', code: 'Mat-Recycle-35', file: 'assets/brochures/Mat-Recycle-35.pdf' }
	] as const;
</script>

<svelte:head>
	<title>Safety Spill Inc. — Home of the Tuff Tray</title>
	<meta name="description" content="Home of the Tuff Tray and other engineered plastic products. Safety Spill Inc., service and workover rig division, Edmonton, Alberta." />
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Safety Spill Inc.</p>
			<h1 id="hero-title">Home of the<br /><em>Tuff Tray.</em></h1>
			<p class="hero-summary">Engineered plastic products for service and workover rigs.</p>
			<a class="button" href="#products">Explore our products <span aria-hidden="true">↗</span></a>
		</div>
		<Carousel {slides} />
	</div>
</section>

<section class="container introduction" id="about" aria-labelledby="about-title">
	<div><p class="eyebrow">About Safety Spill</p><h2 id="about-title">You’ve tried the rest.</h2></div>
	<div><p class="lead">Now put Safety Spill and our Tuff Trays to the test.</p><p>Based in Edmonton, Alberta, Safety Spill Inc. is home to the Tuff Tray and other engineered plastic products for the service and workover rig industry.</p><a class="text-link" href="#contact">Talk to us <span aria-hidden="true">↗</span></a></div>
</section>

<section class="products-section" id="products" aria-labelledby="products-title">
	<div class="container products-grid">
		<div><p class="eyebrow">Our products</p><h2 id="products-title">Tuff Tray &amp;<br />engineered plastics.</h2><p>Browse our product brochures for specifications, then get in touch for availability and enquiries.</p></div>
		<div class="product-list">
			{#each products as product}
				<a href={asset(product.file)} class="product-link"><span><strong>{product.name}</strong><small>{product.code}</small></span><span class="pdf-label">PDF <span aria-hidden="true">↗</span></span></a>
			{/each}
		</div>
	</div>
</section>

<section class="container contact-section" id="contact" aria-labelledby="contact-title">
	<p class="eyebrow">Let’s talk</p><h2 id="contact-title">Contact Safety Spill.</h2>
	<div class="contact-grid">
		<ContactForm />
		<div class="contact-office"><h3>Safety Spill Inc.</h3><address>Edmonton, Alberta</address><p><span class="detail-label">Office</span><a href="tel:+17804368181">780 436 8181</a></p><p><span class="detail-label">Email</span><a href="mailto:greg@safetyspill.com">greg@safetyspill.com</a></p></div>
	</div>
</section>
