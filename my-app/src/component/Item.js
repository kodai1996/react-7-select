import React from 'react';

class Item extends React.Component{
  constructor(props) {
    super(props);
    this.state = {have: true};
  }

  handleClickHave(){
    this.setState({have: true})
  }

  handleClickNotHave(){
    this.setState({have: false})
  }

  render(){
    // ボタンを押してときのアクション
    let have;
    if(this.state.have){
      have = (
        <div className='main-item'>
          <div>
            <a href={this.props.src}>{this.props.name}</a>
            <img src={this.props.image} className='image'></img>
          </div>
          <div>
            <button className='have' onClick={()=>{this.handleClickHave()}}>持っている</button> 
            <button className='notHave' onClick={()=>{this.handleClickNotHave()}}>持っていない</button>
          </div>
        </div>
      )
    }else{
      have = (
        <div className='main-item'>
          <a href={this.props.src}>{this.props.name}</a>
          <button className='have' onClick={()=>{this.handleClickHave()}}>持っている</button> 
        </div>
      )
    }

    
    
    
    
    return (
      <div>
        {have}
      </div>
    );
  }
}

export default Item;