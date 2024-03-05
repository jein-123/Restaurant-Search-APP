import React, {useState,useEffect} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import yelp from '../api/yelp';
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState ([]);

    const [errorMessage, setErrorMessage]= useState('');

    const searchApi = async(searchTerm) => {
        try {
       const response = await yelp.get('/search',{ 
       params:{
        limit:50,
        term:searchTerm,
        location:'san jose'
       }
       });
       console.log(response.data.businesses)
       setResults(response.data.businesses);
    } catch (err){
        setErrorMessage('Something went wrong');
    }
    };


    const filterResultsByPrice= price => {
          // price === '$' || '$$' || '$$$'
     return results.filter(result=>{
        return result.price===price; 
     });
    };

    useEffect(() => {
         searchApi('pasta');

    }, []); 
    
    return (
        <>
            <SearchBar
             term={term} 
             onTermChange={setTerm}
             onTermSubmit={()=> searchApi(term)}
             />           
             {errorMessage ?<Text>{errorMessage}</Text>: null}
             
             <ScrollView>
             <ResultsList 
              results={filterResultsByPrice? filterResultsByPrice('$'):[]}
              title="Cost Effective"
              />
             <ResultsList 
              results={filterResultsByPrice? filterResultsByPrice('$$'):[]}
              title="Bit Pricier"
              />
             <ResultsList 
              results={filterResultsByPrice? filterResultsByPrice('$$$'):[]}
              title="Big Spender"
              />
             </ScrollView>  
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;