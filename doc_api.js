/**
 * @api {post} /check_size/  Request check information image from URL
 * @apiName CheckSize
 * @apiGroup Gm libary
 *
 * @apiParam {String} image_url url of Image.
 *
 * @apiSuccess {String} [width] Width of the Image.
 * @apiSuccess {String} [height]  Height of the Image.
 *
 * @apiSuccessExample {json} [Success-Response]:
 *     HTTP/1.1 200 OK
 *     {
 *       "width": "272",
 *       "height": "92"
 *     }
 *
 * @apiError [error] ImageNotFound The image of url was not found.
 * @apiError [code] 400
 *
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ImageNotFound",
 *       "code": "400"
 *     }
 */
