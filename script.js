const levnaVolba = (pocet) => {
    const nazev = 'Just Food';
    const cenaZaOsobu = 100;
    const cena = pocet * cenaZaOsobu;
    return `Catering od ${nazev} pro ${pocet} lidí za ${cena} Kč`;
};

const stredniVolba = (pocet) => {
    const nazev = 'Your Mama';
    const cenaZaOsobu = 1500;
    const cena = pocet * cenaZaOsobu;
    return `Catering od ${nazev} pro ${pocet} lidí za ${cena} Kč`;
};

const drahaVolba = (pocet) => {
    const nazev = 'Flavour Haven';
    const cenaZaOsobu = 3000;
    const cena = pocet * cenaZaOsobu;
    return `Catering od ${nazev} pro ${pocet} lidí za ${cena} Kč`;
};


const createEvent = (nazevUdalosti, pocetLidi, funkceCatering) => {
    const cateringZprava = funkceCatering(pocetLidi);
    return `Událost ${nazevUdalosti} s ${cateringZprava}.`;
};


console.log(levnaVolba(100)); // Catering od Just Food pro 100 lidí za 10000 Kč
console.log(stredniVolba(100)); // Catering od Your Mama pro 100 lidí za 150000 Kč
console.log(drahaVolba(100)); // Catering od Flavour Haven pro 100 lidí za 300000 Kč


console.log(createEvent("Inaugurace prezidenta", 100, drahaVolba));
// Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč.
