import React, { Component } from 'react';
import Digits from './Digits';
import Separator from './Separator';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        
        const now = new Date();

        this.state = {
            hours: this.formatDigits(now.getHours()),
            minutes: this.formatDigits(now.getMinutes()),
            seconds: this.formatDigits(now.getSeconds())
        }

        this.setTime = this.setTime.bind(this);
        this.formatDigits = this.formatDigits.bind(this);
    }

    setTime() {
        const now = new Date();

        this.setState({
            hours: this.formatDigits(now.getHours()),
            minutes: this.formatDigits(now.getMinutes()),
            seconds: this.formatDigits(now.getSeconds())
        });
    }

    formatDigits(time) {
        time = String(time);
        return time.length === 2 ? time : "0" + time;
    }

    componentDidMount() {
        this.timer = setInterval(this.setTime, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { hours, minutes, seconds } = this.state;

        return (
            <div className="clock">
                <h1>Clock at ReactJS</h1>
                <Digits digit={Number(hours[0])} num={Number(hours[1])} />
                <Separator />
                <Digits digit={Number(minutes[0])} num={Number(minutes[1])} />
                <Separator />
                <Digits digit={Number(seconds[0])} num={Number(seconds[1])} />
            </div>
        );
    }
}