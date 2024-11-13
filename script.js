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

console.log(levnaVolba(100));
console.log(stredniVolba(100));
console.log(drahaVolba(100));

const createEvent = (nazevUdalosti, pocetLidi, funkceCatering) => {
    let cateringZprava = funkceCatering(pocetLidi);
    cateringZprava = cateringZprava.substring(0, 1).toLowerCase() + cateringZprava.substring(1);
    return `Událost ${nazevUdalosti} s ${cateringZprava}.`;
};

console.log(createEvent("Inaugurace prezidenta", 100, drahaVolba));
console.log(createEvent("Levná párty", 150, levnaVolba));
console.log(createEvent("Svatba", 120, stredniVolba));
