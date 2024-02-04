import React, { useState } from 'react'
import Banner from './components/Banner'
import Fashion from './components/Fashion'

const MainOperations = () => {
    const [tAmount, setTamount] = useState(0)
    const [tCount, setTCount] = useState(0)
    const [proName, setName]= useState('')




    const [Mydata,SetMydata]=useState([])

    fetch('https://fakestoreapi.com/products').then(
      response=>{
        return response.json();
      }
    ).then(
      data=>{
        SetMydata(data)
      }
    )
 


    const addcartMethod = (sum,name) => {
        setTCount(tCount + 1)
        setTamount(Number(tAmount) + Number(sum))
        setName(proName+name)
    }

    return (
        <>

            <Banner
                totalAmount={tAmount}
                totalCount={tCount}
                totalProduct = {proName}
            />


            <h1 className="fashion_taital ">Man & Woman Fashion</h1>

            <div className="container">
                <div className="row">
                    {
                        Mydata.map((userData) => (
                            <Fashion
                                title1={userData.title}
                                price1={userData.price}
                                img1={userData.image}
                                addCartMap={addcartMethod}
                            />

                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default MainOperations