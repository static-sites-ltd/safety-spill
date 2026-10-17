<script lang="ts">
	import { page } from '$app/state';
	import { asset, resolve } from '$app/paths';
	import type { LayoutProps } from './$types';
	import '../app.css';
	let { children }: LayoutProps = $props();
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/products', label: 'Products' },
		{ href: '/about-us', label: 'About Us' },
		{ href: '/contact-us', label: 'Contact Us' }
	] as const;
</script>

<a class="skip-link" href="#main">Skip to content</a>
<div class="utility-bar">
	<div class="container utility-bar-content">
		<a href="tel:+17804368181" aria-label="Call Safety Spill at 780 436 8181"><span aria-hidden="true">🇨🇦</span> 780 436 8181</a>
	</div>
</div>
<div class="header-wrap">
<header class="site-header container">
	<a class="brand" href={resolve('/')} aria-label="Safety Spill home"><img src={asset('assets/safety-spill-logo.svg')} alt="Safety Spill" width="390" height="159" /></a>
	<nav aria-label="Main navigation">
		{#each links as link}
			<a href={resolve(link.href)} aria-current={page.route.id === link.href ? 'page' : undefined}>{link.label}</a>
		{/each}
	</nav>
</header>
</div>
<main id="main" tabindex="-1">
	{#if page.route.id === '/'}
		{@render children()}
	{:else}
		<div class="container inner-page">
			<p class="breadcrumb"><a href={resolve('/')}>Home</a><span aria-hidden="true">/</span>{links.find(link => link.href === page.route.id)?.label}</p>
			<article>{@render children()}</article>
		</div>
	{/if}
</main>
<footer class="site-footer">
	<div class="container footer-main">
		<div><a class="footer-name" href={resolve('/')}>Safety Spill Inc.</a><p>Home of the Tuff Tray.</p></div>
		<div><h2>Get in touch</h2><a href="tel:+17804368181">780 436 8181</a><a href="mailto:greg@safetyspill.com">greg@safetyspill.com</a></div>
		<div><h2>Our location</h2><address>Edmonton, Alberta</address></div>
	</div>
	<div class="container footer-bottom"><span>© {new Date().getFullYear()} Safety Spill Inc.</span><a href={resolve('/contact-us')}>Contact Us ↗</a></div>
</footer>
