import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Form, Button, Col, Row, Input


} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TestTable from './Testtable';
import './index.css'
Company.propTypes = {
    
};

function Company(props) {
    const {addTodoList, searchTodoList, isShow} = props;
    const [addForm] = Form.useForm();
    const [state, setState] = useState({ visible: false });
    const showDrawer = () => {
        setState({
            visible: true,
        });
    };

    const onClose = () => {
        setState({
            visible: false,
        });
    };

    const addTodo = (values) =>{
    console.log("🚀 ~ file: Header.jsx ~ line 30 ~ addTodo ~ values", values)
        
        addTodoList(values  );
        onClose();
    }
    

    const renderHeader =() =>{
        return(
            <>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <Button type="primary" onClick={showDrawer}>
                <PlusOutlined /> New Title
            </Button>
            <Input
            style={{height: 35, width:"20%"}}
            onChange={(e)=> searchTodoList(e.target.value)}
            />
            </div>
                
          
            <Drawer
          title="Create a new Todo"
          width={720}
          onClose={onClose}
          visible={state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={() => addForm.submit()} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form form={addForm} layout="vertical" hideRequiredMark onFinish={(values) => addTodo(values)}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input  placeholder="Please enter user name" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
            </>
        )
    }

    return (
        <div style={{padding: 10}} className={isShow? 'hidden' : 'show'}>
            <div className='heading' >DANH SÁCH CÔNG TY</div>
            {renderHeader()}
            <TestTable/>
        </div>
    );
}

export default Company;