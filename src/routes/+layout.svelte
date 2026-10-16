<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import type { LayoutProps } from './$types';
	import '../app.css';
	let { children }: LayoutProps = $props();
</script>

<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header container">
	<a class="brand" href={resolve('/')} aria-label="Safety Spill home"><img src={asset('assets/safety-spill-logo.svg')} alt="Safety Spill" width="390" height="159" /></a>
	<nav aria-label="Main navigation">
		<a href={resolve('/')}>Home</a>
		<a href={`${resolve('/')}#products`}>Tuff Tray &amp; Products</a>
		<a href={`${resolve('/')}#about`}>About Us</a>
		<a href={`${resolve('/')}#contact`}>Contact Us</a>
	</nav>
</header>
<main id="main" tabindex="-1">{@render children()}</main>
<footer class="site-footer">
	<div class="container footer-main">
		<div><a class="footer-name" href={resolve('/')}>Safety Spill Inc.</a><p>Home of the Tuff Tray.</p></div>
		<div><h2>Get in touch</h2><a href="tel:+17804368181">780 436 8181</a><a href="mailto:greg@safetyspill.com">greg@safetyspill.com</a></div>
		<div><h2>Our location</h2><address>Edmonton, Alberta</address></div>
	</div>
	<div class="container footer-bottom"><span>© {new Date().getFullYear()} Safety Spill Inc.</span><a href={`${resolve('/')}#contact`}>Contact Us ↗</a></div>
</footer>
