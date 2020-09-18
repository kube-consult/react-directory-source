import React from 'react';
import FriendCard from './components/FriendCard';
import Head from './components/Head';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

function App() {
  let [friendsList, setFriends] = React.useState(friends);

  const handleFilterButton = (event, type) => {
    console.log("hello handleFileterButton", event)
    let List = filter_by_key(friendsList, event, type);
    console.log(List);
    friendsList = List;
    setFriends(List);

  };

  const handleSortButton = (event) => {
    console.log("hellohandleSortButton ", event)
    let List = sort_by_key(friendsList, event);
    console.log("tf", List);
    friendsList = List;
    setFriends([...friendsList]);
  };

  return (
    <Wrapper>
      <Title>Staff Inventory</Title>
      {
        <Head
          onClick2={handleSortButton}
        />
      }
      {

        friendsList.map((friend) => {
          console.log(friend, "pf");
          return (
            <FriendCard
              key={friend.id}
              name={friend.name}
              team={friend.team}
              occupation={friend.occupation}
              location={friend.location}
              id={friend.id}
              onClick={handleFilterButton}
            />
          )
        })
      }
    </Wrapper>
  );
}

function sort_by_key(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];

    if (typeof x == "string") {
      x = ("" + x).toLowerCase();
    }
    if (typeof y == "string") {
      y = ("" + y).toLowerCase();
    }
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

function filter_by_key(array, key, type) {
  const newList = [];
  for (const friend of array) {
    if (type == 1) {
      if (friend.name === key) {
        newList.push(friend);
      }
    } else if (type == 2) {
      if (friend.occupation === key) {
        newList.push(friend);
      }
    } else if (type == 3) {
      if (friend.team === key) {
        newList.push(friend);
      }
    } else if (type == 4) {
      if (friend.location === key) {
        newList.push(friend);
      }
    }
  }
  return newList;
}

export default App;
