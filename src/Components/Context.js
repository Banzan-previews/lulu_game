import React, { Component } from 'react'
import {itemsList,getItemDataFromID,initializeDataController} from './controllers/DataController'
import {getWinnersList} from './controllers/UserDataController'


const ProductContext = React.createContext()

class ProductProvider extends Component {

    state={
        currentIndex :0,
        currentGroupId :0,
        userCart :[],
        isGameOver:false,
        screenName:'splash',
        score:0,
        is100persaved : true,
        winnersList:[]
        
    }

    componentDidMount(){
        initializeDataController();
    }

    updateCurrentIndex=(itemId)=>{
        // console.log(" called" + this.state.currentIndex)
        this.setState({
            currentIndex:(this.state.currentIndex+1)%15,
            userCart : [...this.state.userCart,itemId]
        })

        this.calculateTotalSavings()

        
    }

    updateScreenName=(value)=>{
        this.setState({
            screenName: value
        })
    }

    calculateTotalSavings() {
        this.setState({
            is100persaved : true,
            score:0
        });
        
        this.state.userCart.forEach((itemId) => {
            const value = getItemDataFromID(itemId);
            if (value.isExpensive) {
                this.setState({
                    is100persaved : false,
                });
            }
            else {
                this.setState({
                    score: this.state.score + value.price
                });
            }
        });
    }

    getWinnersList = async()=>{
        let winnerdata = await getWinnersList()
        if(winnerdata.success){
            this.setState({
                winnersList:winnerdata.list
            })
        }
    }

    
    

    // setPoducts = ()=>{
    //     let tempProducts = []
    //     this.setState(()=>{
    //         return {products:tempProducts}
    //     })
    // }

    getItem = (id)=>{
        
    }

    


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                getItem: this.getItem,
                updateCurrentIndex:this.updateCurrentIndex,
                updateScreenName:this.updateScreenName,
                getWinnersList:this.getWinnersList
                
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
