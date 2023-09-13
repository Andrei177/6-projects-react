import React, { useEffect, useState } from 'react'

const Quiz = () => {
    const questions = [
        {text: 'Сколько будет 2 + 2?', number: 1},
        {text: 'Как зовут автора произведения Евгений Онегин?', number: 2},
        {text: 'Какой самый большой орган человека?', number: 3}
    ];
    const response = [
        {number: 1, response: [3,4,5], right: 4},
        {number: 2, response: ["А.С. Пушкин","Л.Н. Толстой","И.С.Тургенев"], right: "А.С. Пушкин"},
        {number: 3, response: ["Печень","Кишечник","Кожа"], right: "Кожа"}
    ]
    const [rightCount, setRightCount] = useState(0);
    const [num, setNum] = useState(1);
    const next = (variantOtveta, srav) => {
        if(variantOtveta===srav){
            setRightCount(rightCount + 1);
        }
        setNum(num+1);
    }
    useEffect(()=>{
        console.log(rightCount);
    },[rightCount])
  return (
    <div className='quiz'>
      <div className='progress'><div className='progress-line' style={{width: num<3?200*num:600}}></div></div>
      {
        questions.filter(question => {return question.number===num}).map(que => {return <h2 key={que.number}>{que.number}.{que.text}</h2>})
      }
      {
        response.filter(res => res.number===num).map(numbr => 
        <ul className='response'>
        {numbr.response.map(resp => <li className='response__item' key={resp} onClick={(e) => next(resp, numbr.right)}>{resp}</li>)}
        </ul>
        )
      }
      {(num > 3)&&<h2>Вы угадали {rightCount} вопроса из {num-1}</h2>}
    </div>
  )
}

export default Quiz
