import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";
import React, { useState } from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    },
   }))
   var setValue=function(a,b){
    return a-b
}
   export default function DatePickers() {
    const [currentTime, onClick] = useState(new Date());
    const year=setValue(currentTime.getFullYear(),1911)
    console.log(year)
  
    const classes = useStyles();
    return (
      <div> 
          <form className={classes.container} noValidate>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
          <KeyboardDatePicker
            variant="inline"
            value={currentTime}
            label="阿公店開店日選擇"
            onChange={onClick}
            format={"民國"+year+"年"+" - MM月 - dd號"}
            autoOk = "true"
            InputLabelProps={{
              shrink: true,
            }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        </form>
      </div>
    );
  
  }