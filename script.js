//your code here

let bandNames=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']

function sortBandNames(names) {
	const articles=['a','an','the'];
	return names.sort((a,b)=>{
		const aName=a.toLowerCase().replace(/^(the|a|an) /,'');
		const bName=b.toLowerCase().replace(/^(the|a|an) /,'');
		return aName.toLocalCompare(bName);
	});
	
}

const sortedbandnames = sortBandNames(bandNames);

const ulElement = document.getElementById('band');

sortedbandnames.forEach(name=>{
	const liElement=document.createElement('li');
	liElement.textContent=name;
	ulElement.appendchild(liElement);
}) ;
	
