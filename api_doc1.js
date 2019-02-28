/**
 * @api {get} /resize/?width=:width&height=:height  request resize image
 * @apiName Resize
 *
 * @apiParam {Number} [width] width attribute of the IMG resized.
 * @apiParam {Number} [height] height attribute of the IMG resized.
 *

 * @apiSuccessExample {json} [Success-Response]:
 *     HTTP/1.1 200 OK
 *     {
 *      "code":200,
 *      "messsage":"resize success"
 *     }
 *
 * @apiError [error] Can not resize image
 * @apiError [code] 400
 *
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code":"400",
 *       "error":"resize not success"
 *     }
 */
