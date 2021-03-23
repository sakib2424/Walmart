import "./App.css";
import { useState, useEffect } from "react";
import { Typography, Layout } from "antd";
import Home from "./components/Home";
import IssueDisplay from "./components/IssueDisplay";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function App() {
  const URL = "https://api.github.com/repos/walmartlabs/thorax/issues";

  const [displayHome, setDisplayHome] = useState(true);
  const [retrievedData, setRetrievedData] = useState([]);
  const [displayIssueNumber, setDisplayIssueNumber] = useState(null);

  const [issueToDisplay, setIssueToDisplay] = useState(null);

  const switchDisplayToIssue = (event, issueNumber) => {
    console.log(issueNumber);
    setDisplayIssueNumber(issueNumber);
    setDisplayHome(false);
  };

  const switchDisplayToHome = () => {
    setDisplayHome(true);
  };

  // Fetches Data from API
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((output) => setRetrievedData(output));
  }, []);

  // Sets the issue to display
  useEffect(() => {
    setIssueToDisplay(
      retrievedData.find((item) => item.number === displayIssueNumber)
    );
    console.log(issueToDisplay);
  }, [displayIssueNumber]);

  console.log(issueToDisplay);

  return (
    <div className="App">
      <Layout>
        <Header>
          <Title style={{ color: "white" }}>Github Issue Browser</Title>
          {/* <CodeOutlined style={{ float: "right", display: "inline-block" }} />  */}
        </Header>
        <Content>
          {displayHome ? (
            <Home
              retrievedData={retrievedData}
              switchDisplayToIssue={switchDisplayToIssue}
            ></Home>
          ) : (
            <IssueDisplay
              issueToDisplay={issueToDisplay}
              switchDisplayToHome={switchDisplayToHome}
            ></IssueDisplay>
          )}
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
