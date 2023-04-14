function openModal(img) {
	// Büyük fotoğrafın modal penceresinde gösterilmesi
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}

function closeModal() {
	// Modal penceresinin kapatılması
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}
