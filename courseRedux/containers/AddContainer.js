import AddComponent from '../components/AddComponent'
import {addNewTask} from '../actions';
import {connect} from 'react-redux';
const mapStateToProps = state =>{
    return{

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onClickAdd: (abc)=>{
            dispatch(addNewTask(abc))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddComponent);