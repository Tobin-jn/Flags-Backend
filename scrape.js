const Nightmare = require('nightmare');
const fs = require('fs')
const nightmare = Nightmare({ show: true });

nightmare
  .goto('http://jservice.io/popular/1361')
  .evaluate( function () {
    const questionNodes = document.querySelectorAll('tr')
    const list = [].slice.call(questionNodes)
    const totalQuestions = []

    list.forEach(row => {
      const dataNodes = row.childNodes
      // const dataNodes = document.querySelectorAll('td')
      const textList = [].slice.call(dataNodes)
      const question = {
        question: textList[1].textContent,
        country: textList[3].textContent
      }

      totalQuestions.push(question)
    })

    return totalQuestions
  })
  .end()
  .then(function(questions){
    fs.writeFileSync('testOutput.json', JSON.stringify(questions));
    console.log('Done!');
  })
  .catch(function(err){
    console.log(err);
  })