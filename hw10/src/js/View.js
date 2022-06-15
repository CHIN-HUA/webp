import {React,useState} from 'react';

import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";

import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";


const useStyles = makeStyles(
    (theme) => ({
    textField: {    
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,  
    },})
)

// class View extends React.Component{    
//     constructor(props){
//         super(props);
//         this.state={
//             time : Date(), 
//             year : Date(),
//         };  
//     }
//     componentDidMount(){}
//     componentWillUnmount(){}
//     render(){
//         const classes = this.props.classes;
//         return(
//             [
//             <TextField
//             id="date2"        
//             label="Birthday"        
//             type="date"        
//             defaultValue="2017-05-24"
//             // dateFormat={"民國"+year+"年"+" - MM月 - dd號"}
//             className={classes.textField}        
//             InputLabelProps={{shrink:true,}}
//             />,
//             <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
//               <KeyboardDatePicker
//                 value={this.state.time}
//                 onchange={time=>{this.setState({time:time})}}
//                 format={"民國"+this.state.year+"年"+"-M月-d號"}
//                 autoOk = "true"
//                 InputLabelProps={{shrink: true,}}
//               />
//             </MuiPickersUtilsProvider>
//             ]
//         );
//     }
// }

// export default withStyles(useStyles)(View)

export default function View(props){
    const [time,setTime] = useState(new Date());
    let year = time.getFullYear()-1911;
    const classes = useStyles();
    return (
      <div> 
          <form className={classes.container} noValidate>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
          <KeyboardDatePicker
            value={time}
            label="阿公店開店日選擇"
            onChange={setTime}
            format={"民國"+year+"年"+"-MM月-dd號"}
            autoOk = "true"
            InputLabelProps={{shrink: true,}}
            KeyboardButtonProps={{'aria-label': 'change date',}}
          />
        </MuiPickersUtilsProvider>
        </form>
      </div>
    );
  
}