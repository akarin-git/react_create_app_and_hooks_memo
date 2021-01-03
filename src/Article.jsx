// import React from 'react';
import React, {useState} from 'react';

import LikeButton from "./LikeButton";



const Article = (props) => {
  // hook
  const [ isPublished,toggleIsPublished ] = useState(true);



  // 1回目
  // let publishedState = "";
  // if(props.isPublished){
    //   publishedState = "公開"
    // } else {
      //    publishedState = "非公開"
      // }
      return (
        <div>
      
      {/* 1回目 */}
      {/* <h2>{props.title}</h2>
      {/* <p>順番は{props.order}</p>
      <p>名前は{props.author}</p>
      <p>{publishedState}</p> */}

      {/* 2回目 */}
      {/* <h2>{props.title}</h2>
      <p>順番は{props.order}</p> */}

          {/* 3回目 state参照 
          checkbox falseの宣言あり*/}

          <h2>{props.title}</h2>
          {/* reactはlabelはforではなくhtml for */}
          {/* <label htmlFor="check">公開状態</label> */}
          {/* <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} /> */}
          <input type="checkbox" checked={isPublished} id="check" onClick={() => toggleIsPublished(!isPublished)} />
          
          {/* 4 いいねボタン 
          likeButton.jsxファイルを作る 読み込む */}
          {/* <LikeButton count={props.count} /> */}

          {/* hook */}
          <LikeButton />



    </div>
  )
};

export default Article;