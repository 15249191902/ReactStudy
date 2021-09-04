import React, { useEffect, useState, Fragment } from "react"
import { 
  getTypeApi, 
  addType, 
  findByPropertyAndColorApi,
  findByMapApi,
  findReturnMapApi,
  findTypeAndPokemonsByPropertyApi
} from "api/pokemon/typeApi.js"
import {
  getPokemonListApi
} from "api/pokemon/pokemonApi.js"
import {
  Input,
  Button,
  Form,
  List,
  Divider
} from 'antd';
import typeCss from "./style.module.scss"
const PokemonHome = () => {
  const [property, setproperty] = useState();
  const [typeId, setTypeId] = useState();
  const [color, setColor] = useState();
  const [typeList, setTypeList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  // initData()
  console.log("组件函数执行了")
  useEffect (()=> {
    initData()
  }, [])
  function initData(){
    console.log("init函数触发了")
    // 获得属性列表
    getTypeApi().then(res => {
      console.log(res)
      const rData = res.data
      setTypeList(rData)
    })
    // 获得宝可梦列表
    getPokemonList()
  }
  function getPokemonList (data = {}) {
    getPokemonListApi(data).then(res => {
      const rData = res.data
      console.log(rData)
      setPokemonList(rData)
    })
  }
  function changeFn (e){
    setproperty(e.target.value)
  }
  function colorFn (e) {
    setColor(e.target.value)
  }
  function setTypeIdFn (e) {
    setTypeId(e.target.value)
  }
  function submitFn (){
    addType({
      property,
      color
    }).then(res => {
      console.log(res)
    })
  }
  function findByPropertyAndColorFn () {
    findByPropertyAndColorApi({
      property,
      color
    }).then(res => {
      console.log(res)
    })
  }
  function findByMapFn () {
    findByMapApi({
      property,
      color
    }).then(res => {
      console.log(res)
    })
  }
  function findReturnMapFn () {
    findReturnMapApi({
      property,
      color
    }).then(res => {
      console.log(res)
    })
  }
  function findTypeAndPokemonsByPropertyFn () {
    findTypeAndPokemonsByPropertyApi({
      id: typeId
    }).then(res => {
      console.log(res)
    })
  }
  function onFinish (values) {
    console.log(values)
    let {pokemonName, property, id} = values
    getPokemonList({
      id,
      pokemonName,
      type: {
        property
      }
    });
  }
  function onFinishFailed (values) {
    console.log(values)
  }
  return (
    <Fragment>
      <h2>Pokemon Home</h2>
      <Divider orientation="left">属性列表</Divider>
      property:
      <Input value={property} defaultValue="" onChange={changeFn} />
      color: 草：#BDFFA3
      <Input value={color} defaultValue="" onChange={colorFn} />
      <Button type="primary" onClick={submitFn}>submit</Button>
      <Button type="ghost" onClick={findByPropertyAndColorFn}>findByPropertyAndColor</Button>
      <Button type="dashed" onClick={findByMapFn}>findByMapFn</Button>
      <Button type="link" onClick={findReturnMapFn}>findReturnMapFn</Button>
      <p>根据id查询类型宝可梦</p>
      <Input value={typeId} defaultValue="" onChange={setTypeIdFn} />
      <Button type="primary" onClick={findTypeAndPokemonsByPropertyFn}>findTypeAndPokemonsByProperty</Button>
      <br/>
      <div className={typeCss.typeDiv}>
      {
        typeList.map(item => {
          return <span className={typeCss.typeBlock} key={item.id} style={{background: item.color, color: '#fff'}}>{item.property}</span>
        })
      }
      </div>
      <Divider orientation="left">宝可梦</Divider>
      {/* 搜索条件 */}
      <Form
        name="basic"
        style={{marginBottom: 10}}
        initialValues={{
          property: '',
          pokemonName: '',
          id: ''
        }}
        onFinish={onFinish}
        layout="inline"
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Id"
          name="id"
        >

        </Form.Item>
        <Form.Item
          label="Pokemon Name"
          name="pokemonName"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Property"
          name="property"
        >
          <Input/>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <List
        header={<div>展示列表：</div>}
        bordered
        dataSource={pokemonList}
        renderItem={
          item => (
            <List.Item>
              {item.pokemonName} {item.pokemonNameEn} {item.pokemonNameJp}
            </List.Item>
          )
        }
      >

      </List>
    </Fragment>
  )
}
export default PokemonHome