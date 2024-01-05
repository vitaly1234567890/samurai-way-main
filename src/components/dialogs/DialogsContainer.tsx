import React from 'react';
import {MessagePage, sendMessageActionCreator} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {StoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    state: MessagePage
}

type MapDispatchPropsType = {
    addMessage: (newMessageBody: string)=> void
}

let mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        state: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessageBody: string)=> {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}

export  const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)




