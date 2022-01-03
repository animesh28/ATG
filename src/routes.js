import React from 'react'
import { 
    BrowserRouter, 
    Switch, 
    Route 
} from 'react-router-dom'
import Home from './components/home'
import Header from './components/navigation/header'
import MobileHeader from './components/navigation/modHeader'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <MobileHeader/>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
