import React, { useEffect, useState } from 'react'

const Quiz = () => {
    const questions = [
        {text: 'Чему равен корень из 225?', number: 1},
        {text: 'Как зовут автора произведения Евгений Онегин?', number: 2},
        {text: 'Какой самый большой орган человека?', number: 3},
        {text: 'В каком году человек впервые полетел в космос?', number: 4},
        {text: 'Какое агрегатное состояние нужно добавить (твёрдый, жидкий и ...)?', number: 5},
    ];
    const response = [
        {number: 1, response: [10,15,14], right: 15},
        {number: 2, response: ["А.С. Пушкин","Л.Н. Толстой","И.С.Тургенев"], right: "А.С. Пушкин"},
        {number: 3, response: ["Печень","Кишечник","Кожа"], right: "Кожа"},
        {number: 4, response: [1960,1962,1961], right: 1961},
        {number: 5, response: ["Плазма","Газ","Водный"], right: "Газ"}
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
      <div className='progress'><div className='progress-line' style={{width: num<=5?120*(num-1): 600}}></div></div>
      {
        questions.filter(question => {return question.number===num}).map(que => {return <h2 className='question' key={que.number}>{que.number}.{que.text}</h2>})
      }
      {
        response.filter(res => res.number===num).map(numbr => 
        <ul className='response'>
        {numbr.response.map(resp => <li className='response__item' key={resp} onClick={() => next(resp, numbr.right)}>{resp}</li>)}
        </ul>
        )
      }
      {(num > 5)&&<h2 className='result'>Вы ответили верно на {rightCount} вопросов(а) из {num-1}</h2>}
      {(num > 5)&&<button className='retry-btn' onClick={() => {setNum(1); setRightCount(0)}}>Попробовать ещё раз</button>}
    </div>
  )
}

export default Quiz
