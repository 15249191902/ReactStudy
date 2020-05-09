import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {getUserData} from "api/userApi/user.js"
import { 
  Button,
  Row,
  Col,
  Table,
} from 'antd'
import "./Home.css"
function Home () {
    let history = useHistory();

    function handleClick() {
      history.push("/Detail");
    }

    useEffect(() => {
      getUserData().then(res => {
        console.log(res);
      })
    },[])
    
    const dataSource = [
      {
        key: '1',
        name: '智能计划',
        age: 32,
      },
      {
        key: '2',
        name: '精细化',
        age: 42,
      },
    ];
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
    ];
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
                  <div className="headerItem" onClick={() => {
                    history.push("/Detail")
                  }}>组织详情</div>
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