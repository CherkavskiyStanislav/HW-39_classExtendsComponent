import React, { Component } from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";

class Article extends Component {
    render (){
        const { children } = this.props;
        return (
            <div className="article">
            {children}
            <ArticleBody />
            <ArticleActions />
            </div>
            );
    }
}
export default Article;
