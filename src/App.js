import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  titleName: 'NVIDIA NEWS',
  description: 'Article description:',
  description_name: 'NVIDIA Accelerated AI on Azure',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  btn_read: 'Read',
  current_lang: 'EN'
}
let UA = {
  titleName: 'НОВИНИ NVIDIA',
  description: 'Опис статті:',
  description_name: 'Прискорений штучний інтелект NVIDIA в Azure',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  btn_read: 'Читати',
  current_lang: 'UA'
}

class App extends Component{
  constructor() {
    super();
    let lang = EN;
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      lang = JSON.parse(storedLang);
    }
    this.state = {
      lang: lang
    };
  }

  SetLangEN = () => {
    localStorage.setItem('lang', JSON.stringify(EN));
    this.setState({lang: EN})
  }
  
  SetLangUA = () => {
    localStorage.setItem('lang', JSON.stringify(UA));
    this.setState({lang: UA})
  }

  render(){
    const selectedLang = this.state.lang.current_lang;
    const {titleName, description_name} = this.state.lang;
    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>
          <h1 className="title">{titleName}</h1>
            <Article>
            <div className="article__title">
              <h2>{description_name}</h2>
            </div> 
            </Article>
        </LangContext.Provider>
        <div className="lang">
            <button 
              onClick={this.SetLangUA.bind(this)} 
              className={`${selectedLang === 'UA' ? 'active' : ''} lang-btn`}
            >UA
            </button>
            <button 
              onClick={this.SetLangEN.bind(this)}
              className={`${selectedLang === 'EN' ? 'active' : ''} lang-btn`}
            >EN
            </button>
          </div>
      </div>
    )
  }
}

export default App;