import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {
  getUserByPage,
  deleteUserByIdApi
  // getUserData1,
} from "api/userApi/user.js"
import { 
  Button,
  Row,
  Col,
  Table,
} from 'antd'
import "./Home.css"
function Home () {
    // table数据
    const [dataSource, setDateSource] = useState([])
    // 表头
    const columns = [
      {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '数量',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '操作',
        key: "operate",
        render : function (item, record) {
          return (
            <Button type="primary" onClick={(e) => deleteBtn(record.key, e)}>删除</Button>
          )
        }
      }
    ];
    let history = useHistory();
    function handleClick() {
      history.push("/Detail");
    }
    // 删除一条
    function deleteBtn (id, e){
      deleteUserByIdApi({id: id}).then(res => {
        let rData = res.data;
        if (rData.status === 0) {
          initData();
        }
      })
    }
    function initData () {
      getUserByPage({pageNo:1, pageSize:10}).then(res => {
        let rData = res.data
        if (rData.status === 0) {
          let arr = rData.data.user.map(item => {
            return {
              key: item.id,
              name: item.name,
              age: item.age
            }
          });
          setDateSource(arr);
        }
      })
    }
    useEffect(() => {
      // 初始化数据
      initData();
      // let rq1 = getUserData({pageNo: 1, pageSize: 10}).then(res => {
      //   // console.log(res);
      //   // console.log(res)
      //   return res;
      // })
      // let rq2 = getUserData1({pageNo: 1, pageSize: 10}).then(res => {
      //   // console.log(res);
      //   // console.log(res)
      //   return res;
      // })
      // Promise.all([rq1, rq2]).then(res => {
      //   console.log(res)
      // })
    },[])
    return (
        <div className="contain">
          <div className="content">
            <header>
              <Row>
                <Col className="gutter-row" span={6}>
                  <div className="headerItem" onClick={() => {
                    history.push("/Home")
                  }}>首页</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="headerItem" onClick={handleClick}>组织详情</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="headerItem" >质量分析</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="headerItem">标准设备管理</div>
                </Col>
              </Row>
            </header>
            <Table dataSource={dataSource} columns={columns} />
            <Button type="primary">button</Button>
          </div>
        </div>
    )
}
export default Home