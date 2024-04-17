import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { animaldata, birdsData, bugsData,plantsData } from './component/animalsLists.js'; // Importa tus listas desde el archivo animalList.js

const mainImage = require('./assets/forest2.jpg'); // Reemplaza con la ruta de tu imagen principal

export default function MyComponent() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showAnimalList, setShowAnimalList] = useState(false);
  const [showBirdList, setShowBirdList] = useState(false);
  const [showBugList, setShowBugList] = useState(false);
  const [showPlantsList, setShowPlantsList] = useState(false);
  

  const handleTextPress = (item) => {
    setSelectedAnimal(item);
    setShowAnimalList(!showAnimalList);
    setShowBirdList(false);
    setShowBugList(false);
    setShowPlantsList(false);    
  };

  const handleBirdPress = (item) => {
    setSelectedAnimal(item);
    setShowBirdList(!showBirdList); 
    setShowAnimalList(false);
    setShowBugList(false);
    setShowPlantsList(false);
    
  };

  const handleBugsPress = (item) => {
    setSelectedAnimal(item);
    setShowBugList(!showBugList); 
    setShowAnimalList(false);
    setShowBirdList(false);
    setShowPlantsList(false);
    
  };

  const handlePlantsPress = (item) => {
    setSelectedAnimal(item);
    setShowPlantsList(!showPlantsList); 
    setShowAnimalList(false);
    setShowBirdList(false);
    setShowBugList(false);
    
  };

  

  return (
    <View style={styles.container}>
      <LinearGradient colors={['dodgerblue', 'aqua', 'green']} style={styles.gradient}>
        <Text style={styles.header}>DUNNING READ NATURAL AREA</Text> 
        {!selectedAnimal && (          
        <Image source={mainImage} style={styles.animalImage} />
        )}
        <View style={styles.subContainer}>
            {/* ... animals ... */}        
          <View style={styles.listContainer}> 
            <Text style={styles.customHeader} onPress={() => handleTextPress(animaldata)}>Animals</Text>          
            {showAnimalList && (
              <FlatList
                data={animaldata}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleTextPress(item)}>
                    <Text style={styles.Text2}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}            
          </View> 

            {/* ... birds ... */}
          <View style={styles.listContainer}> 
            <Text style={styles.customHeader} onPress={() => handleTextPress(birdsData)}>Birds</Text>          
            {showBirdList && (
              <FlatList
                data={birdsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleBirdPress(item)}>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}            
          </View> 

            {/* ... Insects ... */}
          <View style={styles.listContainer}> 
              <Text style={styles.customHeader} onPress={() => handleTextPress(bugsData)}>Insects</Text>          
              {showBugList && (
                <FlatList
                  data={bugsData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleBugsPress(item)}>
                      <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}            
          </View>

            {/* ... Insects ... */}
          <View style={styles.listContainer}> 
            <Text style={styles.customHeader} onPress={() => handleTextPress(plantsData)}>Plants</Text>
            <View>
              {showPlantsList && (
                <FlatList
                  data={plantsData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePlantsPress(item)}>
                      <Text style={styles.Text2}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}   
            </View>                                  
          </View>
          {selectedAnimal && (
            <View style={styles.infoContainer}>
              
              <Image style={styles.animalImage} source={selectedAnimal.image} />
              <Text style={styles.infoText}>{selectedAnimal.info}</Text>
            </View>
          )}   

          

        </View>
        
        <LinearGradient 
          colors={['red', 'yellow', 'orange']}
          start={{ x: 0, y: 0.80 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <TouchableOpacity>
            <Text style={styles.buttonText}>TAKE AUDIO TOUR</Text>
          </TouchableOpacity>
      </LinearGradient> 
             
      <Text style={styles.textend}>© Dunning Read Natural Area PAC</Text>      
      </LinearGradient>    
    </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    

  },
  customHeader:{      
    color: 'black',      
    textAlign: 'center',
    fontSize: 20,            
    fontWeight: 'bold', 
    justifyContent: 'center',
    alignItems: 'center',        
    padding: 5,
    
      
  }, 

  listContainer: {
    //flex: 1,      
    padding: 2,
    textAlign: 'left',
    height: 40,
    width: '23%',
    marginLeft: 8,
    //justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 10,
    backgroundColor:"lightyellow",
    borderRadius: 15,
  },

  subContainer:{
    flex:1,    
    marginTop: 250,  
    flexDirection: 'row',     
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
    //backgroundColor: 'pink',
    
  },
  itemText: {
    fontSize: 18,
    backgroundColor: 'skyblue',
    padding: 10,
    color: 'black',
    borderRadius: 20,
  },

  
  infoContainer: {
    top: '50%', // Centra el contenedor en la pantalla
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -150 }], // Ajusta la posición basada en el tamaño del contenedor
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  animalImage: {
    top: '27%', // Centra el contenedor en la pantalla
    left: '60%',
    transform: [{ translateX: -150 }, { translateY: -150 }], // Ajusta la posición basada en el tamaño del contenedor
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 160,
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },

  textend: {
    bottom: 10,
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    position: 'absolute',
  },
  Text2:{
    color: 'black',      
    textAlign: 'left',
    //marginLeft: 8,
    //marginRight: 8,
    fontSize: 15,      
    marginTop: 4,      
    fontWeight: 'bold',      
  },  
  button: {
    justifyContent: 'center',
    width: '60%',
    height: '40',
    marginBottom: 50,    
    borderRadius: 15,      
    alignSelf: 'center',
    position: 'absolute',
    bottom: 420,
  },

  buttonText: {
    color: 'black',      
    textAlign: 'center',
    fontSize: 24,   
    fontWeight: 'bold',      
  },

  textend: {
    bottom: 10,
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    position: 'absolute',
  },  
  // ... otros estilos que necesites
});
