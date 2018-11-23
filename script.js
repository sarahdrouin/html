function onglet(id) {
	const onglets=document.getElementsByClassName("onglet");
	console.log(onglets);
	for(let i=0;i<onglets.length;i++){
		const onglet=onglets[i]
		onglet.style.display="none";
	}
	const el=document.getElementById(id);
	el.style.display="block";
}
