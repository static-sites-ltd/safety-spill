export const products = [
	{
		name: 'Pipe Tube Tray', code: 'PTT-36-006',
		file: 'assets/brochures/PTT-36-006.pdf', image: 'assets/products/PTT-36-006.jpg',
		alt: 'Black pipe tube trays with steel handles, stacked on a pallet',
		description: 'An impact-resistant plastic tubing tray with a corrugated bottom for additional fluid capacity.',
		specs: [['Inside base', '36″ × 36″'], ['Top dimensions', '42″ × 42″'], ['Depth', '6″'], ['Material', 'Impact-resistant plastic']],
		features: ['Steel handles', 'Corrugated bottom']
	},
	{
		name: 'Yellow Line Pipe Tray', code: 'LPT-001',
		file: 'assets/brochures/LPT-001 Brochure.pdf', image: 'assets/products/LPT-001.jpg',
		alt: 'Yellow line pipe tray with rubber-lined saddles',
		description: 'A safety-yellow pipe tray with multiple saddles and high-temperature rubber liners on two saddles for steam lines.',
		specs: [['Outside dimensions', '32″ × 24″ × 9″ high'], ['Weight', '10 lb'], ['Pipe diameter', 'Up to 6″'], ['Material', 'Cold-weather impact plastic'], ['Temperature', 'Down to −40°C']],
		features: ['Side openings for handling', 'Stackable for storage', 'Rubber liners on two saddles']
	},
	{
		name: 'Blue Line Pipe Tray', code: 'LPT-002',
		file: 'assets/brochures/LPT-002 Brochure.pdf', image: 'assets/products/LPT-002.jpg',
		alt: 'Blue line pipe tray showing pipe saddles and side handholds',
		description: 'A cold-weather impact-resistant plastic pipe tray with six saddles and cutouts for handling.',
		specs: [['Dimensions', '28″ long × 24″ wide × 8″ high'], ['Weight', '8 lb'], ['Saddles', 'Two 4″ and four 3″'], ['Material', 'Cold-weather impact-resistant plastic']],
		features: ['Stackable', 'Cutouts for easy handling']
	},
	{
		name: 'Yellow Drip Tray', code: 'DT-002',
		file: 'assets/brochures/DT-002 Brochure.pdf', image: 'assets/products/DT-002.jpg',
		alt: 'Long yellow drip tray with built-in handles',
		description: 'A stackable drip tray for use with pumps, compressors and vehicles.',
		specs: [['Capacity', '112 litres (29 gallons)'], ['Dimensions', '48″ long × 24″ wide'], ['Weight', '10 lb'], ['Material', '3/16″ thick plastic']],
		features: ['Built-in handles', 'Stackable']
	},
	{
		name: 'Blue Drip Tray with Spout', code: 'VDT-001',
		file: 'assets/brochures/VDT-001 Brochure.pdf', image: 'assets/products/VDT-001.jpg',
		alt: 'Blue drip tray with a pouring spout at one end',
		description: 'A drip tray with a pouring spout and a lip designed for easy gripping.',
		specs: [['Capacity', '110 litres'], ['Dimensions', '48″ long × 24″ wide'], ['Weight', '13 lb'], ['Material', '3/16″ thick plastic']],
		features: ['Pouring spout', 'Gripping lip', 'Stacks by alternating end to end']
	},
	{
		name: 'Electrical Pipe Stand', code: 'EPS-001',
		file: 'assets/brochures/EPS-001 Brochure.pdf', image: 'assets/products/EPS-001.jpg',
		alt: 'Yellow electrical pipe stand with a double saddle at the top',
		description: 'A stackable pipe stand with a double saddle configuration for two pipe diameters.',
		specs: [['Height', '15″'], ['Base / top diameter', '17″ / 11″'], ['Pipe diameter', 'Up to 10″ in one direction; 5″ in the other'], ['Weight capacity', '800 lb'], ['Stand weight', '8 lb']],
		features: ['Double saddle configuration', 'Stackable']
	},
	{
		name: 'Recycled Mat with Holes', code: 'Mat-Recycle-35',
		file: 'assets/brochures/Mat-Recycle-35.pdf', image: 'assets/products/Mat-Recycle-35.jpg',
		alt: 'Square black recycled rubber mat with drainage holes',
		description: 'A mat made from recycled rubber conveyor belting, sized to fit the 36″ tubing trays.',
		specs: [['Dimensions', '35″ × 35″'], ['Thickness', '½″'], ['Material', '2-ply recycled rubber conveyor belting'], ['Drainage holes', '1¼″']],
		features: ['Recycled belting', 'Fits 36″ tubing trays']
	}
] as const;
