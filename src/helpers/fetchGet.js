export const getRecuerdos = async (state) => {

    const url = `http://localhost:8080/api/recuerdos`;

    const resp = await fetch(url);

    const data = await resp.json();
    state(data)
}