import React , {Component , PropTypes} from 'react'; 
import { DatePicker } from 'antd';

export class HelloWorld extends Component{
    constructor(){
        super();
        this.state = {
            text:'Hello World' ,
            age:12 
        };
        this.changeValue = (type,event) => {
            let value = event.target.value;
             this.setState({
                    [type]:value
             });
        };
    }
    
    componentWillMount(){
        this.state.phone = '1383838438';
    }
    componentDIdMount(){
        this.setState(phone , '1359999999');
    }
    render(){
        let info = this.state ; 
        return (
            <div>
                <DatePicker />
               <div className='index_tip'>
                    <span className='tip_text'>请录入您的销售业绩</span>
                </div>   
                  <input type="text" maxLength='11' 
                        value={info.phone} 
                        placeholder='请输入客户电话' 
                    />
                     <input type="text" maxLength='11' 
                        value={info.text} 
                        placeholder='请输入text' 
                    />
                     <input type="text" maxLength='11' 
                        value={info.age} onChange={this.changeValue.bind(this,'age')} 
                        placeholder='请输入age' 
                    />
           
           <span>info.age: </span><span>{info.age}</span>
            </div>
        );
    }
}