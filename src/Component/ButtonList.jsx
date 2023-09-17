import React from 'react'
import Button from './Button';
const list=["Music","Gaming","News","Cricket","Sports","StockMarket","Live","UPSC","Cars","Watched"];
const ButtonList = () => {
  return (
    <div className='flex gap-8 mt-8'>

       {
            list.map((tag,index)=>{
              return <Button key={index} Name={tag} ></Button>
            })

       }


    </div>
  )
}

export default ButtonList