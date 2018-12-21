const Nightmare = require('nightmare');
const fs = require('fs')
const nightmare = Nightmare({ show: true });

nightmare
  .goto('http://jservice.io/popular/12816')
  .evaluate( function () {
    const questionNodes = document.querySelectorAll('tr')
    const list = [].slice.call(questionNodes)
    const totalQuestions = {}

    list.forEach(row => {
      const dataNodes = row.childNodes
      const textList = [].slice.call(dataNodes)

      totalQuestions[textList[3].textContent] = textList[1].textContent
    })

    return totalQuestions
  })
  .end()
  .then(function(questions){
    fs.writeFileSync('endE.json', JSON.stringify(questions));
    console.log('Done!');
  })
  .catch(function(err){
    console.log(err);
  })