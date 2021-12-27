import { Slider, InputNumber, Row, Col } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import {DateStore} from "../../store";
class IntegerStep extends React.Component {
    state = {
        inputValue: 1988,
    };
    static contextType = DateStore;


    render() {
        const { inputValue } = this.state;
        const { DateState, DateDispatch } = this.context;
        return (
            <div>
                {/*<p>count : {DateState.count}</p>*/}
            <Row>
                <Col span={12}>
                    <Slider
                        min={1959}
                        max={2023}
                        onChange={(value)=>{
                            this.setState({
                                inputValue: value,
                            });
                            DateDispatch({type: 'setValue', year: value});
                        }}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1959}
                        max={2023}
                        style={{ margin: '0 16px' }}
                        value={inputValue}
                        onChange={(value)=>{
                            this.setState({
                                inputValue: value,
                            });
                            DateDispatch({type: 'setValue', year: value});
                        }}
                    />
                </Col>
            </Row>
            </div>
        );
    }
}
export default IntegerStep;
