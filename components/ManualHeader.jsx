
import { useEffect } from "react";
import {useMoralis} from "react-moralis";

function Header(){

    const {enableWeb3, account, isWeb3Enabled,Moralis, deactivateWeb3,isWeb3EnableLoading} = useMoralis();

    useEffect(()=>{
        if(isWeb3Enabled) return
        if(typeof window !== "undefined"){
            if(window.localStorage.getItem("connected")){
                enableWeb3()
            }
        }
       },
        [isWeb3Enabled])
    
    useEffect(()=>{
        Moralis.onAccountChanged((account) =>{
            console.log(`Account changed to ${account}`)
            if(account == null){
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null Account found")
            }
        })
    })

    return (
    <div>
        {account ? (<div>Connected to {account}</div>): <button onClick={async ()=>{ await enableWeb3()
        window.localStorage.setItem("connected","injected")}}
        disabled={isWeb3EnableLoading}>Connect</button>} 
        </div>
        )
}

// We are going to work on hard way first then  the easy way

export default Header;