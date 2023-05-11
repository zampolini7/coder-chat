export default function errorHandler(error, req, res, next) {
  console.log(error);
  return res.json({
    status: 500,
    method: req.method, //el metodo del erorr
    path: req.url, // el endpoint del error
    response: error.message, // info minima del error para el cliente
  });
}
