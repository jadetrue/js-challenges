// Asynchronous - This challenge will involve using promises to deal with asynchronous functions

export const getData = () => {
  return fetch("./data")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

// Get list of names
export const getNames = () => []

// Filter by employment

// match interests