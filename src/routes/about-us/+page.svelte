<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>About Us | Safety Spill Inc.</title>
	<meta name="description" content="Safety Spill Inc. in Edmonton, Alberta. Home of the Tuff Tray and other engineered plastic products." />
</svelte:head>

<h1>About Safety Spill</h1>
<p>Based in Edmonton, Alberta, Safety Spill Inc. is home to the Tuff Tray and other engineered plastic products for the service and workover rig industry.</p>
<h2>Our products</h2>
<p>Our product range includes pipe and tubing trays, drip trays, electrical pipe stands and recycled rubber mats. Browse the catalogue for photos, dimensions and features, with a PDF brochure for each product.</p>
<p><a class="text-link" href={resolve('/products')}>View products and specifications →</a></p>
<p>For availability and product enquiries, <a href={resolve('/contact-us')}>contact Safety Spill</a>.</p>
