const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 },
];
for(let i = 0 ;i < produits.length ; i++){
console.log(`${produits[i].nom} - ${produits[i].prix} DH`);
};
const disponibles = produits.filter(produit => produit.stock > 0);
console.log("Nombre de produits disponibles : " + disponibles.length);
const valeurStock = produits.reduce(
  (total, produit) => total + produit.prix * produit.stock,
  0
);

console.log("\nValeur totale du stock : " + valeurStock );
const moinsCher = disponibles.reduce(
  (moinsCher, produit) =>
    produit.prix < moinsCher.prix ? produit : moinsCher
);
console.log("Produit le moins cher : " + moinsCher.nom);
const resume = produits.map(
  produit =>
    produit.nom + " - " + produit.prix + " MAD - " + produit.stock +'inites'
);
console.log(resume);
function estValide(produit) {
  return (
    Number.isFinite(produit.prix) &&
    produit.prix >= 0 &&
    Number.isFinite(produit.stock) &&
    produit.stock >= 0
  );
}



const { nom, prix } = moinsCher;

console.log("Nom : " + nom);
console.log("Prix : " + prix );