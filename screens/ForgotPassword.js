import React, {  useState, useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export default function ForgotPassword() {
    
    const [isLoading,setLoading] = useState(true);
    const [source,setSource] = useState(null);

    useEffect(() => {
            fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) =>{
                    setLoading(false);
                    setSource(responseJson.movies);
                    console.log("Loaded Link");
                })
                .catch((error) => {
                    console.log(error);
                })
        });

    if(isLoading){
        return(
            <View>
                <ActivityIndicator />
                <Text>Content Loaded</Text>
            </View>
          
        );
    }
    else{

        let details = source.map((val, key) => {
            return <View key={key}> <Text>{val.title}</Text></View>    
            
        })

        return(
            <View>
                <Text> {details} </Text>
            </View>
        );
    }

}