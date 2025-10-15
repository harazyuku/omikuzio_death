const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const fortunes = [
    "[大凶] 明日、死にます。[アンラッキーカラーは#2b2b2b]",
    "[凶] 親が妊娠してるでしょう。[ラッキーアイテムは妊娠検査薬]",
    "[おほ吉] ロシアンルーレットで全戦全勝！？ [ラッキーアイテムは遺書]",
    "[大キチガイ] 今日あなたの罪は全て許されます。早く大麻を吸いに行こうぜ！ [ラッキーアイテムは未来]"
  ];

  const random = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[random];
});


