export function generateTree(n, m) {
  const obj = {
    data: [],
  };

  createNodes(obj.data, n, m)
  return obj;
}

function createNodes(obj, n, m) {
  for (let j = 0; j < m; j++){
    obj[j] = {
      name: `String_${Math.random()}`,
      children: []
    }
    if (n > 0) createNodes(obj[j].children, n -1 , m)
  }
}