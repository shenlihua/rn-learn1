// Svg.js
import React, { Component } from 'react';
import {
    View9,
} from 'react-native'
import SvgUri from 'react-native-svg-uri';
import svgs from '../assert/svgs';

export default class Svg extends Component{
    render() {
        const {
            icon,
            fill,
            size,
            style,
        } = this.props;
        console.log(icon)
        let svgXmlData = svgs[icon];

        if (!svgXmlData) {
            let err_msg = `没有"${this.props.icon}"这个icon，请下载最新的icomoo并 npm run build-js`;
            throw new Error(err_msg);
        }
        return (
            <SvgUri
            width={size}
            height={size}
            svgXmlData={svgXmlData}
            fill={fill}
            style={style}
        />
        )
    }
}