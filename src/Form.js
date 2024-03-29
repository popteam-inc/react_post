import React, { Component } from 'react';
// import './css/form.css';

export default class Form extends Component {

  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" /><br/>
          <textarea name="desc" placeholder="説明を入力" defaultValue="Twitterと連携して作る"></textarea><br/>
          <button type="submit">投稿</button>
        </form>
      </div>
    );
  }
}