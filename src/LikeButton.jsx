// import React from 'react';
import React, {useState,useEffect} from 'react';

// const LikeButton = (props) => {
//   return (
//     <button id={"counter"}>いいね数:{props.count}</button>
//   )
// };

const LikeButton = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);
  const countUp = () => {
    counter(count + 1)
  }
  useEffect(() => {
    // componentDidMount
    // console.log('render')
    document.getElementById('counter').addEventListener('click', countUp)

    // componentDidUpdate
    if (count >= 10) {
      counter(0)
    }

    // componentWillUnmount クリーンアップ
    return () => {
      // console.log('Unmounting')
      document.getElementById('counter').removeEventListener('click',countUp)
    }
    // からの配列を用意する事で1回しかいいねできない
    // [中身入ると]もう一度関数が呼び出される
  } ,[limit]);

  return (
    <>
    <button id={"counter"}>いいね数:{count}</button>

    {/* // limit */}
    <button onClick={()=> release(!limit)}>もっといいね</button>
    <button onClick={()=> release(false)}>trueからfalse 1回だけいいね追加</button>
  </>
  )
};

export default LikeButton;