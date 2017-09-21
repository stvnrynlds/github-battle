var React = require('react');
var PropTypes = require('prop-types');

var styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }
    componentDidMount() {

        var stopper = this.props.text + this.props.symbol.repeat(this.props.repeat);
        this.interval = window.setInterval(function () {
            if (this.state.text === stopper) {
                this.setState(function () {
                    return {
                        text: this.props.text
                    }
                })
            } else {
                this.setState(function(prevState) {
                    return {
                        text: prevState.text + this.props.symbol
                    }
                })
            }
        }.bind(this), this.props.speed);
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }

}

Loading.defaultProps = {
    text: 'Loading',
    speed: 250,
    symbol: '.',
    repeat: 3
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
    symbol: PropTypes.string,
    repeat: PropTypes.number
}

module.exports = Loading;