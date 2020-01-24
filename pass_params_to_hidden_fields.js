// Passer un parametre de l'url dans un hidden field de formulaire

<script>
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get('company'));

$("input#deuxio").each(function(i, obj) {
  obj.value = urlParams.get('company');
});
</script>
