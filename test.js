'use strict';
const pug = require('pug');
const assert = require('assert');

//XSS脆弱性のテスト
const html = pug.renderFile('./views/posts.pug', {
  posts: [{
    id: 1,
    content: `<script>alert('test');</script>`,
    postedBy: 'guest1',
    trackingCookie: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }],
  user: 'guest1'
});

// スクリプトタグがエスケープされて、含まれていることをチェック
assert(html.indexOf(`&lt;script&gt;alert('test');&lt;/script&gt;`) >= 0);
console.log('テストが正常に完了しました')
