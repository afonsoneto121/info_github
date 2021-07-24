export const convertDate = (date) => {
    const dateFormated = new Date(date);
    return dateFormated.toLocaleString('pt-BR');
}