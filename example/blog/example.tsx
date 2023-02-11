import React from "react";
import { simplyProvider, simplyUseData } from "simply-context";

const Blog = () => {
  const [articles, setArticles] = simplyUseData("articles");

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
  <simplyProvider initialState={{ articles: [] }}>
    <Blog />
  </simplyProvider>
);
