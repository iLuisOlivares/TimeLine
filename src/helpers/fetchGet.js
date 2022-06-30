export const getRecuerdos = async (state) => {

    const url = `https://recuerdos-app-karen.herokuapp.com/api/recuerdos`;

    const resp = await fetch(url);

    const data = await resp.json();
    state(data)
}