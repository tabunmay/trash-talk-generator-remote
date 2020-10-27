// 函式:隨機抽取
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// 函式:產生幹話
function generator(option) {
// 定義變數
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const jobs = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
}
const phrase = ['很簡單', '很容易', '很快', '很正常']

const target = option.target

let trashTalk = ''

//處理錯誤
  if (!target) {
    return '選好角色才能執行喔!!'
  }

//抽取隨機任務與幹話
const taskSampling = sample(task[target])
const phraseSampling = sample(phrase)
//回傳結果
return trashTalk += `身為一個${jobs[target]} ${taskSampling} ${phraseSampling}吧!!`

}

// 匯出
module.exports = generator
