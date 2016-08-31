class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeTabIndex: 0 };
  }

  onSetActiveTab = (activeTabIndex) => this.setState({ activeTabIndex })

  render() {
    const { onSetActiveTab, state: { activeTabIndex } } = this;
    const panelProps = {
      type: 'floating',
      tabs: {
        headers: [ 'Veeery long Tab 1', 'Tab 2' ],
        onSetActiveTab,
        activeIndex: activeTabIndex
      },
      header: {
        title: 'Tabbed panel!'
      }
    };

    const tab = panelProps.tabs.headers[activeTabIndex];

    return (
      <TabbedPanel {...panelProps}>
        <div style={{ height: 200 }}>
          <p>{tab}</p>
        </div>
      </TabbedPanel>
    );
  }

}
