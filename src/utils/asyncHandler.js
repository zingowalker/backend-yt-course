const asyncHandler  = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}


export {asyncHandler}

// try catch example
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.statu(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }