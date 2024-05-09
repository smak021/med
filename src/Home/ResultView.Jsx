import React from 'react'

function ResultView({list=[]}) {
    if(!Array.isArray(list) || list.length<=0){
        return null
    }

  return (list.map(item=>{
            return (
                <div>
                    <div>{item.query}</div>
                    <div>{item.answer}</div>
                </div>
            )
    }))
}

export default ResultView