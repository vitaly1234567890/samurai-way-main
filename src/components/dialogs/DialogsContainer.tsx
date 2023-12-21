import {ChangeEvent} from 'react';
import {MessagePage, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    state: MessagePage
}

type MapDispatchPropsType = {
    onChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    addMessage: ()=> void
}

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        state: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>)=> {
            dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
        },
        addMessage: ()=> {
            dispatch(sendMessageActionCreator())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


