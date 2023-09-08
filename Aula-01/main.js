import Filme from './filme';

const filme1 = new Filme('Homem de Ferro', 2010, 'Ação');
const filme2 = new Filme('Homem Aranha', 2015, 'Ação');

filme1.marcarAssitido(true);
// filme2.avaliar(10);

filme1.mostraInfo;
// filme2.mostraInfo;