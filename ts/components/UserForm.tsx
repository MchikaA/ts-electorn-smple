import React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { createChangeUserNameAction } from '../actions/UserNameEvents';
import IUser from '../states/IUser';
import store, { IState } from '../Store';
import { TextBox } from './TextBox';

/**
 * ユーザー名を入力して表示する。
 */

class UserForm extends React.Component<IUser, {}> {
    public render() {
        return (
            <div>
                <p>
                    <TextBox label="ユーザー名" type="text" value={this.props.name} onChangeText={this.onChangeText} />
                </p>
                <p>名前: {this.props.name}</p>
            </div>
        );
    }

    private onChangeText = (value: string) => {
        // action や store が できてから書く
        store.dispatch(createChangeUserNameAction(value));
    }
}

const mapStateToProps = (state: IState) => {
    return state.User;
};

export default connect(mapStateToProps)(UserForm);
