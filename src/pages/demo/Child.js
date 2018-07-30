import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentWillReceiveProps(newProps){
        console.log('will props' + newProps.name)
    }

    shouldComponentUpdate(){
        console.log('should upate')
        return true;
    }

    componentWillUpdate(){
        console.log('will upate')
    }

    componentDidUpdate(){
        console.log('did upate')
    }

    render(){
        return <div>
            <p>这里是子组件，测试子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}