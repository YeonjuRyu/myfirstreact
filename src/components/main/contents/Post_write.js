import React from 'react';
import './Post_write.css'

class Post_write extends React.Component{

  constructor(props){
    super(props);
  }

    render(){
        return(
            <table className="table table-bordered">
            <div>
              <div> 글쓰기 </div>
            </div>
              <div id="posting">
                <form action={'http://27.1.60.24:9900/board/writePost/'+this.props.match.params.id} id="form_id" method="POST" encType="multiplart/form-data">
                  <tr>
                    <th>제목: </th>
                      <td><input type="text" placeholder="제목을 입력하세요. " name="title" className="form-control"/></td>
                  </tr>
                  <tr>
                    <th>작성자: </th>
                    <td><input type="text" placeholder="작성자 이름을 입력하세요. " name="userName" className="form-control"/></td>
                  </tr>
                  <tr>
                    <th>내용: </th>
                      <td><textarea colSpan="10" placeholder="내용을 입력하세요. " name="content" className="form-control"></textarea></td>
                      <input type="hidden" id="post_reg_ip" name="ip" value="Undefine"></input>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <input type="submit" value="글 등록" className="pull-right"/>
                    </td>
                  </tr>
                </form>
              </div>
            </table>
        )
    }
}

export default Post_write;