const fetchApiWine = async (number) => {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products?page=${number}&limit=10`);
  const data = await response.json();
  return data;
};

export const fetchApi = async () => {
  const response = await fetch('https://wine-back-test.herokuapp.com/products');
  const data = await response.json();
  return data.items;
};

export default fetchApiWine;
