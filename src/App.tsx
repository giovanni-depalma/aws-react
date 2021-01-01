import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { DataStore } from '@aws-amplify/datastore';
import { Pizza } from './models';



function App() {
  const [pizze, setPizze] = useState<Array<Pizza>>([]);
  const onCreatePizza = useCallback(() => {
    const savePizza = async () => {
      await DataStore.save(
        new Pizza({
          "name": "Lorem ipsum dolor sit amet",
          "price": 123.45
        })
      );
    }
    savePizza();
  }, []);

  useEffect(()=>{
    const fetchData = async () => {
      const models = await DataStore.query(Pizza);
      console.log("Posts retrieved successfully!", JSON.stringify(models, null, 2));
      setPizze(models);
    };
    fetchData();
  },[setPizze]);

  return (
    <div className="App">
      <button onClick={onCreatePizza}>Create Pizza</button>
      {
        pizze.map(item => (
          <li key={item.id}>{item.id} - {item.name} - {item.price}</li>
        ))
      }
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
