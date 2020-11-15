export default function getObjectById(array, id) {
    return array.find((element) => element.id === id);
}
