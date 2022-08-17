import React from 'react';

const QuestionAndAnswer = () => (
  <div className="qa-toma-subcription">
    <h3>總水とおま Q&A BOX♡</h3>
    <img src="/assets/images/qa-toma-lg.png" alt="" />
    <p className="content">とおまさんに毎月１つ質問に答えてもらう企画。みなさんからの質問をお待ちしています。応募はコチラから</p>
    <div className="list-box-qa">
      <div className="item">
        <div className="question">
          <p>Q ライブでもっと深い体験をするに
            はどうしたらいいですか？</p></div>
        <div className="answer">
          <p>TOMA</p>
          <p>そうですね。やっぱりタオルですね。
            タオルを振り回してみてください。
            エネルギーの循環が生まれ、感覚が
            研ぎ澄まされてきますよ。</p></div>
      </div>
    </div>
  </div>
);

export { QuestionAndAnswer };
