import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import View from './View';
import DatePickers from './Func';

const useStyles = (theme) => ({

});

class Controller extends React.Component{    
    constructor(props){
        super(props);       
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        const classes = this.props.classes;
        return(
            <View/>
            // <DatePickers/>
        );
    }
}

export default withStyles(useStyles)(Controller)