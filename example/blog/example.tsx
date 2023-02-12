import React from "react";
import { SimplyProvider, SimplyUseData } from "simply-context";

const Blog = () => {
  const [articles, setArticles] = SimplyUseData("articles");

  const handleAddArticle = (title: string) => {
    setArticles([...articles, { title, date: new Date().toDateString() }]);
  };

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            {article.title} ({article.date})
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddArticle("Article 1")}>
        Add an article
      </button>
    </div>
  );
};

const App = () => (
  <SimplyProvider initialState={{ articles: [] }}>
    <Blog />
  </SimplyProvider>
);
