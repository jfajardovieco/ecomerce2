import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from "../utils/getTokenConfig"
import PurchaseCard from "../components/PurchasesPage/PurchaseCard"


const PurchasesPages = () => {

const [purchases , getPurchases] = useFetch()

useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
getPurchases(url, getConfigToken())
},[])
console.log(purchases)
  return (
    <div>
        <h2>My purchases</h2>
        <div>
            {

            purchases?.map(infoPurchase => (
                    <PurchaseCard 
                    key={infoPurchase.id}
                    purchase={infoPurchase}/>

            ))                
            }
        </div>
    </div>
  )
}

export default PurchasesPages