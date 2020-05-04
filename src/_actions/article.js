import { GET_ARTICLES, GET_ARTICLE } from "../constants/action-type";
import { API } from "../config/api";

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    async payload() {
      try {
        const articles = await API.get("/articles");
        return articles.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const getArticle = (id) => {
  return {
    type: GET_ARTICLE,
    async payload() {
      try {
        const article = await API.get(`/article/${id}`);
        return article.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
