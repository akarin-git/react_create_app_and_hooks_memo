import React from 'react';
import Article from './Article';

// モジュールのimport
// 一部づつ
// import { Foo, Bar } from './components/FooBar';

// 全体をimport (FooBar 別名importできる)
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

// hook
const Blog = () => {
    
  
// class Blog extends React.Component {
  // 1.2の時
  // constructor(props) {
  //   super(props)
  // }
  // render() {
  //   const authorName = "Akari";

  // 3.state設定
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   isPublished: false,
    //   count:0
    // }
  // }

  // 4 いいね ライフサイクルの設定
  // componentDidMount() {
    // ボタンがクリックされたらカウントアップ
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // カウントアップが10以上になったら0から
  // componentDidUpdate() {
    // console.log(this.state.count)
  //   if (this.state.count >= 10) {
  //     this.setState({
  //       count:0
  //     })
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click',this.countUp)
  // }

  // 3
  // state変更 公開状態を反転させる関数
  // togglePublished = () => {
  //   this.setState({
  //     isPublished: !this.state.isPublished
  //   })
  // };

  // 4 いいねボタンカウントアップ
  // countUp = () => {
  //   this.setState({
  //     count:this.state.count + 1
  //   })
  // }

  // render() {
    return (
      <>
        {/* 1回目 */}
        {/* <Article
          title={"React"}
          order={3}
          isPublished={true}
          author={authorName}
        />  */}

        {/* 2回目 */}
        {/* <Article title={"reactの使い方"} order={ 3}/>
        <Article title={"HI"} order={ 2}/>
        <Article title={"JSX"} order={ 1}/>
        */}

        {/* 3回目 state取得*/}
        <Article
          title={"JSX"}
          // isPublished={this.state.isPublished}
          // toggle={() => this.togglePublished()}
          // count={this.state.count}
        />


        {/* <Foo />
        <Bar /> */}

        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />

      </>
    )
    }
  // }

export default Blog;

