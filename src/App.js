import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import React from 'react';
import Shirt from './picture/shirt.jpg';
import Shoes from './picture/shoes.jpg';
import Setup from './picture/setup.jpg';
import Blackskiny from './picture/blackskiny.jpg';
import Longcoat from './picture/longcoat.jpg';
import Knit from './picture/knit.jpg';
import Sox from './picture/sox.jpg';
  

class App extends React.Component{
    
    handleReset(){
      // 全部のstate.haveをtrueにする
      
    }

  render(){
    const itemList = [
      {
        name: '白シャツ',
        image: Shirt,
        src: "https://www.kottablog.com/shirt/"
      },
      {
        name: '革靴',
        image: Shoes,
        src: "https://www.kottablog.com/leather-shoes/"
      },
      {
        name: 'セットアップ',
        image: Setup,
        src: "https://www.kottablog.com/setup/"
      },
      {
        name: '黒スキニー',
        image: Blackskiny,
        src: "https://www.kottablog.com/black-skiny/"
      },
      {
        name: 'ロングコート',
        image: Longcoat,
        src: "https://www.kottablog.com/longcoat/"
      },
      {
        name: 'ニット',
        image: Knit,
        src: ""
      },
      {
        name: '白と黒の靴下',
        image: Sox,
        src: "https://www.kottablog.com/socks/"
      }
    ]



    return(
      <div>
        <header>
              <h1>初心者が買うべきもの7選</h1>
        </header>
        <main>
          <div className='all-item'>
            {itemList.map((item) => {
              return(
                <Item 
                  name = {item.name}
                  image = {item.image}
                  src = {item.src}
                />
                )
              })}
          </div> 
        </main>

      </div>
    )
  }
}

export default App;
