import React, {useContext} from 'react';
import {DateStore} from "../store";
import { Form, Input, Button, Checkbox } from 'antd';
function ControlPanel() {
    const {DateState, DateDispatch} = useContext(DateStore);
    const onFinish = (values) => {
        let thisYear = values.year;
        DateDispatch({type:'setValue',year:thisYear});
        console.log("dateState:",DateState)
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <div>
        <p>count : {DateState.count}</p>
        <p>year : {DateState.year}</p>
        <button onClick={() => DateDispatch({type: 'increment'})}>add</button>

        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Year to choose"
                name="year"
                rules={[
                    {
                        required: true,
                        message: 'Please input the year you want to choose!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            {/*<Form.Item*/}
            {/*    label="class"*/}
            {/*    name="class"*/}
            {/*    rules={[*/}
            {/*        {*/}
            {/*            required: true,*/}
            {/*            message: 'Please input teh class you want to choose!',*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*>*/}
            {/*    <Input.Password />*/}
            {/*</Form.Item>*/}

            {/*<Form.Item*/}
            {/*    name="remember"*/}
            {/*    valuePropName="checked"*/}
            {/*    wrapperCol={{*/}
            {/*        offset: 8,*/}
            {/*        span: 16,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>;
}

export default ControlPanel;
