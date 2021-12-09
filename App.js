// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   ScrollView,
//   TextInput,
//   Image,
//   TouchableOpacity,
// } from "react-native";

// import CategoryBtn from "./assets/components/CategoryBtn";
// import TabView from "./assets/components/TabView";
// import categoriesData from "./assets/data/categoriesData";
// import cardData from "./assets/data/cardData";
// import CardItem from "./assets/components/CardItem";
// import colors from "./assets/colors/colors";
// import Heart from "./assets/svg/Heart";
// import Home from "./assets/svg/Home";
// import Upload from "./assets/svg/Upload";
// import Scan from "./assets/svg/Scan";
// import Notification from "./assets/svg/Notification";
// import Profile from "./assets/svg/Profile";
// import Search from "./assets/components/Search";

// export default function App() {
//   const { width, height } = Dimensions.get("window");
//   const [activeTab, setActiveTab] = useState("Left");

//   const showLeft = () => {
//     console.log("Left clicked");
//     setActiveTab("Left");
//   };

//   const showRight = () => {
//     console.log("Right clicked");
//     setActiveTab("Right");
//   };

//   const isActive = (tab) => activeTab === tab;

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView style={{ marginTop: 20, flex: 1 }}>
//         <View style={{ paddingHorizontal: 20 }}>
//           <Search />
//           <View style={{ marginBottom: 20 }} />
//           <Text style={styles.bold}>Category</Text>
//         </View>

//         <View style={{ marginBottom: 10 }} />

//         <View
//           style={{
//             flexDirection: "row",
//             width: "80%",
//             justifyContent: "space-around",
//           }}
//         >
//           {categoriesData.map((item, index) => (
//             <CategoryBtn id={item.id} title={item.text} />
//           ))}
//         </View>

//         <View style={{ marginBottom: 20 }} />

//         <View
//           style={{ width: "100%", height: 8, backgroundColor: colors.form }}
//         />

//         <View style={{ marginBottom: 5 }} />

//         <View style={{ flexDirection: "row" }}>
//           <TabView
//             title="Left"
//             onPress={showLeft}
//             isActive={isActive("Left")}
//           />
//           <TabView
//             title="Right"
//             onPress={showRight}
//             isActive={isActive("Right")}
//           />
//         </View>

//         <View style={{ marginBottom: 20 }} />

//         <View
//           style={{ flexDirection: "row", flexWrap: "wrap" }}
//         >
//           {cardData.map((item, index) => (
//             <CardItem
//               id={item.id}
//               title={item.title}
//               profile={item.imageProfile}
//               name={item.chef}
//               img={item.image}
//             />
//           ))}
//         </View>

//       </ScrollView>
//       <View
//         style={{
//           width: "100%",
//           height: 60,
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           backgroundColor: colors.white,
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-evenly",
//         }}
//       >
//         <Home />
//         <Upload />
//         <Scan style={{width: 58, height: 58, backgroundColor: colors.primary, borderRadius: 28, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 25, left: 150}} />
//         <Notification />
//         <Profile />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   image: {
//     width: 31,
//     height: 31,
//     borderRadius: 11,
//     marginRight: 8,
//   },
//   imageText: {
//     fontSize: 12,
//     fontWeight: "500",
//     lineHeight: 14.5,
//   },
//   imageMain: {
//     width: 151,
//     height: 151,
//     borderRadius: 16,
//     marginBottom: 16,
//   },
//   bold: {
//     fontSize: 17,
//     lineHeight: 27,
//     fontWeight: "700",
//     marginBottom: 8,
//     color: colors.textBold,
//   },
//   sub: {
//     fontSize: 12,
//     fontWeight: "500",
//     lineHeight: 14.5,
//     color: colors.textGray,
//   },
// });

// // import React from "react";
// // import { View, Text } from "react-native";

// // import CategoriesData from "./assets/data/categoriesData";
// // const data = ['0','1','2','3','4','5','6'];

// // function titles() {
// //   return data.map((item) => <Text>{item.text}</Text>);
// // }

// // export default function App() {

// //   return (
// //     <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
// //       {titles()}
// //     </View>
// //   );
// // }

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
  ActivityIndicator,
  useWindowDimensions,
  Pressable,
  TextInput
} from "react-native";

import colors from "./assets/colors/colors";
import Card from "./components/itemCard";

// create a component
const App = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");

  const height = useWindowDimensions().height;

  useEffect(() => {
    fetchChars();
  }, [page]);

  const fetchChars = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      // .then((res) => setData([...data, ...res.results]))
      .then((res) => setData(res.results))
      // .then((chars) => setInfo(chars.info.next))
      .finally(() => {
        setLoading(false);
      });
  };

  const renderRow = ({ item }) => {
    return (
      <Card
        display={item.image}
        name={item.name}
        species={item.species}
        gender={item.gender}
        status={item.status}
        location={item.location?.name}
        origin={item.origin?.name}
        episodes={`${item.episode?.length}`}
      />
    );
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  const prevPage = () => {
    setPage(page - 1);
    console.log(page);
  };

  const nextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={"white"} />
    </View>
  ) : (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchfield}
          placeholder="Enter name"
          onChangeText={(value) => setSearchField(value)}
          value={searchField}
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRow}
        // onEndReached={handleLoadMore}
        // onEndReachedThreshold={0}
        // ListFooterComponent={() => (
        //   <View style={{ marginTop: 10, alignItems: "center" }}>
        //     <ActivityIndicator size={24} color={colors.yellow} />
        //   </View>
        // )}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 40,
            borderRadius: 10,
            marginRight: 40,
            backgroundColor: colors.yellow,
          }}
          onPress={prevPage}
        >
          <Text style={{ color: colors.white }}>Back</Text>
        </Pressable>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 40,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
          onPress={nextPage}
        >
          <Text style={{ color: colors.white }}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: "#333",
  },
  searchfield: {
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    width: 250,
    borderRadius: 50,
  },
  searchWrapper: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  imageWrapper: {
    width: 250,
    borderColor: colors.black,
    borderWidth: 1,
    alignItems: "center",
    paddingBottom: 15,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    color: colors.white,
    margin: 10,
    marginHorizontal: 25,
    alignSelf: "flex-start",
  },
  numWrapper: {
    width: 40,
    height: 28,
    backgroundColor: "#0062CC",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  value: {
    color: colors.white,
    fontSize: 16,
  },
  loading: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default App;

//import liraries
// import React, { Component, useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';

// // create a component
// const App = () => {
//   const [num, setNum] = useState("")

//   const changeHandler = (num) => {
//     setNum(num)
//     if (num > 2004) {
//       Alert.alert("Something");
//       setNum(null)
//       console.log("error")
//     } else  {
//       setNum(num)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <TextInput
//       style={{width: 100, backgroundColor: "#059321"}}
//       value={num}
//       maxLength={4}
//       onChangeText={changeHandler}
//       />
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

// //make this component available to the app
// export default App;
