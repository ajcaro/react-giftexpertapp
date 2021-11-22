import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One punch']);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'Full Metal Alchemist']);
	// 	//setCategories(cats => [...cats, 'Full Metal Alchemist']);
	// };

	return (
		<>
			<h2> GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map(category => (
					<GifGrid category={category} key={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
