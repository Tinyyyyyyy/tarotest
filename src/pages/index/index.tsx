import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Test from "../../comps/test";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Test />
      </View>
    );
  }
}
