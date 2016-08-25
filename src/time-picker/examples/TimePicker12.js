class Example extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render = () => {
    return (
      <div>
        <h1>12 Hour Time Picker</h1>
        <TimePicker value={this.state.value} onChange={(value) => this.setState({ value })} timeFormat="12h" />
      </div>
    );
  }
}