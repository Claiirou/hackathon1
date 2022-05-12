import alcool from '../assets/alcools.json'
import apero from '../assets/apero.json'
import bieres from '../assets/bieres.json'
import softs from '../assets/softs.json'


const AppelData = () => {

    const alcoholList =alcool.slice(0, 20);
    const chipsNCo = apero.filter(c => c.nom_francais.includes('chips') || c.nom_francais.includes('Chips'))
    const peanuts = apero.filter(c => c.nom_francais.includes('Cacahuète') && c.nom_francais.includes('grillée'));
    const nutmix = apero.filter(c => c.nom_francais.includes('Mélange apéritif'));
    // const saucisson = jsonData.filter(c => c.nom_francais.includes('Saucisson sec'));
    // const olives = jsonData.filter(c => c.nom_francais.includes('Olive'));
    return (
        <div>
            toto
        </div>
    );
};

export default AppelData;