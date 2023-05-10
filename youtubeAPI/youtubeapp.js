import { NativeRouter, Route, Switch } from 'react-router-native';
import { View } from 'react-native';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const youtubeapp = () => (
  <NativeRouter>
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/video/:id" component={VideoDetail} />
        <Route path="/channel/:id" component={ChannelDetail} />
        <Route path="/search/:searchTerm" component={SearchFeed} />
      </Switch>
    </View>
  </NativeRouter>
);

export default youtubeapp;
