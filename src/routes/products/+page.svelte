<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { products } from '#lib/products.js';
</script>

<svelte:head>
	<title>Products | Safety Spill Inc.</title>
	<meta name="description" content="Explore Safety Spill pipe trays, drip trays, pipe stands and recycled mats. Product photos, specifications and PDF brochures." />
</svelte:head>

<div class="catalogue-layout">
	<nav class="product-index" aria-labelledby="product-directory-title">
		<h1 id="product-directory-title">Products</h1>
		<ul>
			{#each products as product}
				<li><a href={`#${product.code}`}>{product.name} <span>({product.code})</span></a></li>
			{/each}
		</ul>
	</nav>
	<div class="catalogue-products">
		{#each products as product}
			<section class="product-detail" id={product.code} aria-labelledby={`${product.code}-title`}>
				<header class="product-heading">
					<h2 id={`${product.code}-title`}>{product.name}</h2>
					<span>Part no. {product.code}</span>
				</header>
				<div class="product-body">
					<a class="product-photo" href={asset(product.image)} aria-label={`View larger photo of ${product.name}`}>
						<img src={asset(product.image)} alt={product.alt} width="620" height="468" loading="lazy" />
					</a>
					<div>
						<p>{product.description}</p>
						<dl class="specifications">
							{#each product.specs as [label, value]}
								<div><dt>{label}</dt><dd>{value}</dd></div>
							{/each}
						</dl>
						<ul class="product-features">
							{#each product.features as feature}<li>{feature}</li>{/each}
						</ul>
						<div class="product-actions">
							<a class="button" href={asset(product.file)}>View brochure (PDF) <span aria-hidden="true">↗</span></a>
							<a href={resolve('/contact-us')}>Enquire about this product</a>
						</div>
					</div>
				</div>
			</section>
		{/each}
	</div>
</div>
