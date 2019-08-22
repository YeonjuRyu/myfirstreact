import React from 'react';
import './Category.css';
import { Link } from "react-router-dom";


class Category extends React.Component{

    constructor(props){
        super(props);

        this.state={
            boardlist:[]
        };

        this._isMounted = false;
    }

    componentDidMount(){
        this._isMounted = true;
        fetch('http://27.1.60.24:9900/board/boardList')
        .then((res)=>{res.json()
        .then((data)=>{this.setState({boardlist: data.boardList})
        })
      }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
     }


    render(){
        return(
                <ul id='category'>
                    {
                        this.state.boardlist ?
                        this.state.boardlist.map((item) =>
                        <li>
                            <Link to = {"/board/"+item.id}>{item.board_name}</Link>
                        </li>
                        )
                        :
                        <li>
                            <a>Wait the data is still fetching</a>
                        </li>
                    }
                </ul>
        )
    }
}


export default Category;