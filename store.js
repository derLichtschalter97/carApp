import { makeObservable, observable, action} from "mobx"
import { configure } from 'mobx';

class ApplicationStore{
    seletctedMonth = null
    constructor(){
        configure({ useProxies: 'never' });
        makeObservable(this,{
            seletctedMonth: observable,
            selectMonth: action,
        })
        
    }
    selectMonth(e){
        console.log("SET MONTH")
        this.selectedMonth = e
    }
    getSelectedMonth(){
        return this.selectMonth
    }}


var store = new ApplicationStore()
export default store