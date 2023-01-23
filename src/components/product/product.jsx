import "./product.css";

const Product = ({img,link,title,desc,tagHtml,tagCss,tagJavascript,tagReact,tagFigma,tagWordpress,tagElementor,tagHotjar,tagAdobe}) => {

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <div class="productContainer">
      <div className="title">
      <p class="titleProduct">{title}</p></div>
      <p class="descProduct">{desc}</p>
      <div className="tagContainer">
      {tagHtml && <p className="tag tagHtml">{tagHtml}</p>}
      {tagCss && <p className="tag tagCss">{tagCss}</p>}
      {tagJavascript && <p className="tag tagJavascript">{tagJavascript}</p>}
      {tagReact && <p className="tag tagReact">{tagReact}</p>}
      {tagFigma && <p className="tag tagFigma">{tagFigma}</p>}
      {tagWordpress && <p className="tag tagWordpress">{tagWordpress}</p>}
      {tagElementor && <p className="tag tagElementor">{tagElementor}</p>}
      {tagHotjar && <p className="tag tagHotjar">{tagHotjar}</p>}
      {tagAdobe && <p className="tag tagAdobe">{tagAdobe}</p>}
      </div>
      </div>
    </div>
  )
}

export default Product