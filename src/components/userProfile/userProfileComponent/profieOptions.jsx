import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./profilePanel.css";
import MessagePost from './messagePost';
import SimplifiedPosts from './simplifedPosts';
import FloatingFilter from './floatingFilter';

class ProfileOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likedPostsDetail: this.props.likedPostsDetail,
      myPostsDetail: this.props.myPostsDetail,
    }
  }
  render() {
    return (
      <div className="columns is-mobile" style={{ align: "center", margin: "0px auto", display: "flex" }}>
        <div className="column" style={{ flex: "70%", margin: "0px" }}>
          <Tabs>
            <TabList>
              <Tab>My posts</Tab>
              <Tab id="FavTab">My Favorite</Tab>
              <Tab disabled={true}>Browsing History</Tab>
              <Tab disabled={true}>Replies</Tab>
            </TabList>
            <TabPanel>
              <SimplifiedPosts
                postType={"MyPosts"}
              />
            </TabPanel>
            <TabPanel>
              <SimplifiedPosts
                postType={"MyLikes"}
              />
            </TabPanel>
            <TabPanel>
            </TabPanel>
            <TabPanel>
              <MessagePost />
            </TabPanel>
          </Tabs>
        </div>
        <FloatingFilter />
      </div>
    )
  }
}

export default ProfileOptions;