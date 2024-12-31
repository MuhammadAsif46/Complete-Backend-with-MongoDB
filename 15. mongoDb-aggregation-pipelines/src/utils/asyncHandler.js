const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export { asyncHandler }

// const asyncHandler = () => {}
// const asyncHandler = (func)=>() => {}
// const asyncHandler = (func) => async () => {}
// const asyncHandler = (fun)=> async(req,res,next) => {
//     try {
//         return await fun(req,res,next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message: error.message
//         })

//     }
// }