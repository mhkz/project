const ArticleSchema = require('../schema/article.schema');
class ArticleModel {
    static async createArticle (articleInfo) {
       // await new ArticleSchema(articleInfo)
       //      .save()
       //      .catch(error => {
       //          console.log("-------",error)
       //          return error;
       //      })
        await ArticleSchema.create(articleInfo)
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log("----------------", error)
             })
    }
}
module.exports = ArticleModel