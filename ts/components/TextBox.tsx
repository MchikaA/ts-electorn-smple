import React from 'react';

// tslint:disable-next-line:interface-name
interface Iprops {
    // ラベル印字文字
    label: string;
    // テキストボックスのタイプ
    type: 'text' | `password`;
    // テキストボックスに表示する
    value: string;
    // 値の確定時にその値を親のプロパティが取得するためにコールバック関数を提供する。
    onChangeText: (value: string) => void;
}

/**
 * ラベル付きのテキストボックスを提供する
 */
export class TextBox extends React.Component<Iprops, {}> {
    // Domエレメントをレンダリングする。
    public render() {
        // ラベルが設定されていない場合は、Labelを出力しない。
        const label = (!!this.props.label) ?
            <label>{this.props.label}</label> :
            null;
        return (
            <span>
                {/* {}で囲むと JavaScriptのコードが書ける */}
                {label /* --(e) */}
                <input name="username" type={this.props.type} value={this.props.value}
                    onChange={this.onChangeText} />
            </span>
        );
    }
    // 値を変更したら store.dispathcでactionをreducerに渡してstateを更新する。
    // stateを更新したらcomponentのpropが更新され際レンダリングされテキストボックの内容が変化する
    private onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeText(e.target.value);
    }
}
