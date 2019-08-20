import React from 'react'
import Boardlist from './Boardlist.js';


//Web으로부터 데이터를 가져오는 컴포넌트, 상태에 저장해둔 후에  어떤 컴포넌트한테든지 필요한 정보를 제공
class Boardcontainer extends React.Component{

    constructor(props) {
        super (props);
    
        this.state = {
            boardlist : "board name example1"
        };
        
        this.processRequest = this.processRequest.bind(this); //processRequest메쏘드를 호출해서 객체를 만들어주게됨
    }

    processRequest(){
        let url = 'http://27.1.60.24:9900/board/boardList'
        fetch(url,{method: 'GET'}) //promise
        .then((response) => response.json())
        .then((jsonObj) => this.setState({boardlist : jsonObj.boardList})) //jsonObj내의 boadList를 state에 설정
    }

    render(){
        return(
            <ul>
                <li>
                    <Boardlist boardlist={this.state.boardlist}/>
                </li>
            </ul>
        )
    }
}

export default Boardcontainer;