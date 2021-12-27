import React, {useContext, useState} from 'react';
import {DateStore} from "../store";
import {Form, Input, Button, Checkbox, Col, Slider, InputNumber, Row} from 'antd';
import Thisslider from "./ControlPanel/slider";
function ControlPanel() {
    const {DateState, DateDispatch} = useContext(DateStore);
    // const {inputValue,setInputValue} = useState(0);
    let inputValue =0;


    // const onChangeDate = value => {
    //     setInputValue(value)
    //     DateDispatch({type: 'setValue', year: value});
    // };
    // const {DateState, DateDispatch} = useContext(DateStore);

    const onFinish = (values) => {
        let thisYear = values.year;
        DateDispatch({type: 'setValue', year: thisYear});
        console.log("dateState:", DateState)
        console.log('Success:', values);
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



        return <div>
            {/*<p>count : {DateState.count}</p>*/}
            <p>year : {DateState.year}</p>
            {/*<button onClick={() => DateDispatch({type: 'increment'})}>add</button>*/}

            {/*<Row>*/}
            {/*    <Col span={12}>*/}
            {/*        <Slider*/}
            {/*            min={1}*/}
            {/*            max={20}*/}
            {/*            onChange={DateDispatch({type: 'setValue', year: inputValue})}*/}
            {/*            value={ inputValue }*/}
            {/*        />*/}
            {/*    </Col>*/}
            {/*    <Col span={4}>*/}
            {/*        <InputNumber*/}
            {/*            min={1}*/}
            {/*            max={20}*/}
            {/*            style={{margin: '0 16px'}}*/}
            {/*            value={inputValue}*/}
            {/*            onChange={DateDispatch({type: 'setValue', year: inputValue})}*/}
            {/*        />*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Thisslider/>
            {/*<Form*/}
            {/*    name="basic"*/}
            {/*    labelCol={{*/}
            {/*        span: 8,*/}
            {/*    }}*/}
            {/*    wrapperCol={{*/}
            {/*        span: 16,*/}
            {/*    }}*/}
            {/*    initialValues={{*/}
            {/*        remember: true,*/}
            {/*    }}*/}
            {/*    onFinish={onFinish}*/}
            {/*    onFinishFailed={onFinishFailed}*/}
            {/*    autoComplete="off"*/}
            {/*>*/}
            {/*    <Form.Item*/}
            {/*        label="Year to choose"*/}
            {/*        name="year"*/}
            {/*        rules={[*/}
            {/*            {*/}
            {/*                required: true,*/}
            {/*                message: 'Please input the year you want to choose!',*/}
            {/*            },*/}
            {/*        ]}*/}
            {/*    >*/}
            {/*        <Input />*/}
            {/*    </Form.Item>*/}

            {/*    /!*<Form.Item*!/*/}
            {/*    /!*    label="class"*!/*/}
            {/*    /!*    name="class"*!/*/}
            {/*    /!*    rules={[*!/*/}
            {/*    /!*        {*!/*/}
            {/*    /!*            required: true,*!/*/}
            {/*    /!*            message: 'Please input teh class you want to choose!',*!/*/}
            {/*    /!*        },*!/*/}
            {/*    /!*    ]}*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    <Input.Password />*!/*/}
            {/*    /!*</Form.Item>*!/*/}

            {/*    /!*<Form.Item*!/*/}
            {/*    /!*    name="remember"*!/*/}
            {/*    /!*    valuePropName="checked"*!/*/}
            {/*    /!*    wrapperCol={{*!/*/}
            {/*    /!*        offset: 8,*!/*/}
            {/*    /!*        span: 16,*!/*/}
            {/*    /!*    }}*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    <Checkbox>Remember me</Checkbox>*!/*/}
            {/*    /!*</Form.Item>*!/*/}

            {/*    <Form.Item*/}
            {/*        wrapperCol={{*/}
            {/*            offset: 8,*/}
            {/*            span: 16,*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Button type="primary" htmlType="submit">*/}
            {/*            Submit*/}
            {/*        </Button>*/}
            {/*    </Form.Item>*/}
            {/*</Form>*/}
        </div>;


}
export default ControlPanel;
