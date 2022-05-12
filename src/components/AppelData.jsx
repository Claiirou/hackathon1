import jsonData from '../assets/data.json'


const AppelData = () => {

    const alcoholList =jsonData.slice(0, 20);
    const chipsNCo = jsonData.filter(c => c.nom_francais.includes('chips') || c.nom_francais.includes('Chips'))
    const peanuts = jsonData.filter(c => c.nom_francais.includes('Cacahuète') && c.nom_francais.includes('grillée'));
    const nutmix = jsonData.filter(c => c.nom_francais.includes('Mélange apéritif'));
    const saucisson = jsonData.filter(c => c.nom_francais.includes('Saucisson sec'));
    const olives = jsonData.filter(c => c.nom_francais.includes('Olive'));
    console.log(saucisson[2])
    return (
        <div>
            toto
        </div>
    );
};

export default AppelData;