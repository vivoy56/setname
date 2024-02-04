import React from 'react'

const Fashion = (props) => {

   const addcartFun = () => {

      props.addCartMap(props.price1, props.title1)
   }

   return (

      <>
         
            <div className="col-4">
               <div class="card" >
                  <img class="card-img-top" src={props.img1} alt="Card image cap" />
                  <div class="card-body">
                     <h5 class="card-title text-center">{props.title1}</h5>
                     <p class="card-text text-center">Price: {props.price1}</p>
                     <a href="#" class="btn btn-primary text-center" onClick={addcartFun}>Add to cart</a>
                  </div>
               </div>
            </div>
        




      </>
   )
}

export default Fashion