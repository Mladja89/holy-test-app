const errorTransformer = error => {
  console.dir(error);
  return error.data.data.message;
};

export {
  errorTransformer
}