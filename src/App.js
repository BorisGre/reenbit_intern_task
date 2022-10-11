import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localStorageReadRaw, localStorageWrite } from './helpers/localStorageHelper';
import LoginPage from './views/pages/Login';
import MainPage from './views/pages/Main';

function App({storageID}) {
   
    const reduxState = useSelector(state => state)
    
     useEffect(() => {
        const localStorageState = localStorageReadRaw(storageID)
        const strRedux = JSON.stringify(reduxState)
            if(strRedux !== localStorageState){
                localStorageWrite(storageID, reduxState)          
            }
       
    }, [storageID, reduxState]);
    
   
    return (
            <main className="rootApp">

                <LoginPage {...users}/>
                <MainPage/>
            </main>
    );
}

export default App;
