import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("Appレンダリング");
  const [num, setNum] = useState(0); //第一引数は状態変数、第二引数は更新関数、useStateは決まり文句の関数
  // num を引数に、setNum関数で何か変化させるという事が起こる
  const onClickButton = () => {
    setNum(num + 1);
  };
  // const onClickReset = () => { // これだと関数が再生成されて、レンダリングされるから・・・
  //   setNum(0);
  // };
  const onClickReset = useCallback(() => {
    // useCallback関数を使用して、レンダリングされないようにする
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
