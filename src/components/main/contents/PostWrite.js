import React from 'react';

class PostWrite extends React.Component{

    render(){
        return(
            <table className="table table-bordered">
              <div> 글쓰기 </div>
              <div id="posting">
                <form action={'http://127.0.0.1:3000/postList'} id="form_id" method="POST" encType="multiplart/form-data">
                  <tr>
                    <th>제목: </th>
                      <td><input type="text" placeholder="제목을 입력하세요. " name="post_title" className="form-control"/></td>
                  </tr>
                  <tr>
                    <th>작성자: </th>
                    <td><input type="text" placeholder="작성자 이름을 입력하세요. " name="post_user_name" className="form-control"/></td>
                  </tr>
                  <tr>
                    <th>내용: </th>
                      <td><textarea colSpan="10" placeholder="내용을 입력하세요. " name="post_content" className="form-control"></textarea></td>
                      <input type="hidden" id="board_id" name="board_id" value={this.props.match.params.id}></input>
                      <input type="hidden" id="post_reg_ip" name="post_reg_ip" value=""></input>
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

export default PostWrite;