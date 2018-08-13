<!DOCTYPE html>
<?php
function bindManyParams($params, &$stmt){
	for($i = 1; $i <= count($params); $i++){
		$stmt->bindParam($i, $params[$i - 1]);
	}
}
include('./assets/PHP/connexion.php');
//recuperation des donneesr
$email = $_POST['email'];
$site = $_POST['website'];
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$telephone = $_POST['telephone'];
$civilite = $_POST['sexe'];
$identite = $_POST['statut'];
$objet = $_POST['objet'];
$message = $_POST['message'];

$stmt = $bdd->prepare("INSERT INTO Site_Contact (email, site, prenom, nom, telephone, civilite, identite, objet, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

//bindage des paraatres
bindManyParams(array(
	$email,
	$site,
	$prenom,
	$nom,
	$telephone,
	$civilite,
	$identite,
	$objet,
	$message
	),
	$stmt
);

if(!$stmt->execute()) die('<p>La requete n\'a pas pu être inseree</p>');
?>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Contact</title>

	<link rel="stylesheet" type="text/css" href="./assets/CSS/contact_final.css">
	<script type="text/javascript" src="./assets/JS/JQuery/libs/jquery.js"></script>
	<script type="text/javascript" src="./assets/JS/JQuery/src/down.js"></script>
	<script type="text/javascript" src="./assets/JS/Tools/spin.js"></script>
</head>
<body>
	<div id="message">
		<p>Votre message a été envoyé avec succés. Il sera traité dans les plus brefs délais. Vous allez être rediriger vers la page d'accueil.</p>
	</div>

	<?php
		header("refresh: 6;url=index.html");
	?>
</body>
</html>