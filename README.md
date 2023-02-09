# SneakerDial
***Link to live site:*** 
https://andrehanna8.github.io/SneakerDial/#

***Instructions:***
   -  Select a silhouette from the dial
   -  Choose a sneaker from the sidebar

***Technical Implementations:***
- Cycling through each colorway of the selected model using an index and creating buttons for each one. Index is set by using the id of the image or "silhouette" thats clicked:
 ```
 // wheelscript.js
const homepage = document.getElementById("homepage")
const catalog = document.getElementById("catalog")

const clickevent = homepage.addEventListener('click', (e) => {
    if (e.target.className === "resize" ) {
        homepage.setAttribute("hidden", true) //hides homepage
        catalog.removeAttribute("hidden") // shows catalog
        const index = Number(e.target.id)

    jordan_list[index].forEach(sneaker => { 
        
        const sneaker_div = document.createElement("div") // !create sneaker div
        const sneaker_div_img = document.createElement("img") // !create sneaker div img
        sneaker_div_img.classList.add("dd-img") // ~add class to img
        const sneaker_div_button = document.createElement("button") // !create sneaker div button
        sneaker_div_button.classList.add("dropbtn") // ~add class to button

        const button_image = document.createElement("img") // !create sneaker div dropdown image
        button_image.src = sneaker["img-link"] // ~add img to dropdown button
        button_image.classList.add("dd-button-img") // ~add class to dropdown button image
        sneaker_div_button.append(button_image) // & append dropdown button image to button

        sneaker_div_button.innerText = ` ${sneaker.Name}  ` // ~add text to button
        sneaker_div_img.src = sneaker["img-link"] // ~add img to img
        sneaker_div.append(sneaker_div_img) // & append img to div
        sneaker_div.append(sneaker_div_button) // & append button to div

        const card_div = document.createElement("div") // !create card div
        const breakline = document.createElement("br") // !create breakline

        const parent = document.getElementById("parent-dropdown") // *get parent div
        parent.append(sneaker_div) // & append sneaker div to parent div
            
        const cardParent = document.getElementById("card-container") // *get card parent div

        sneaker_div_button.addEventListener('click', (e) => { // add event listener to button
            
            const header_name = document.getElementById("shoe-name") 
            header_name.innerText = sneaker.Name
            
            const shoe_card_name = document.getElementById("shoe-card-name")
            shoe_card_name.innerText = "Name: " + sneaker.Name

            const shoe_img = document.getElementById("shoe-img")
            shoe_img.src = sneaker["img-link"]

            const shoe_style_code = document.getElementById("style-code")
            shoe_style_code.innerText = "Style Code: " + sneaker["Style-Code"]

            const shoe_stockx_link = document.getElementById("stockx-link")
            shoe_stockx_link.href = sneaker["StockX-link"]
            shoe_stockx_link.innerText = "Find on StockX!"

            const shoe_goat_link = document.getElementById("goat-link")
            shoe_goat_link.href = sneaker["GOAT-link"]
            shoe_goat_link.innerText = "Find on GOAT!"
```
         
-  Spinning ring implemented only using CSS:
```
// homepage.css
#shape {
  position: relative;
  top: 160px;
  margin: 0 auto;
  height: 200px;
  width: 200px;
  -webkit-transform-style: preserve-3d;
}

.plane {
  position: absolute;
  height: 200px;
  width: 200px;
  border: 1px solid white;
  -webkit-border-radius: 12px;
  -webkit-box-sizing: border-box;
  text-align: center;
  font-family: Times, serif;
  font-size: 124pt;
  color: black;
  background-color: rgba(252, 247, 247, 0.6);
  -webkit-transition: -webkit-transform 2s, opacity 2s;
  -webkit-backface-visibility: hidden;
}  

#shape.backfaces .plane {
  -webkit-backface-visibility: visible;
}  

#shape {
  -webkit-animation: spin 20s infinite linear;
}  

:root {
  --mouse-x: 0px;
  --mouse-y: 0px;
}

.mover {
  left: var(--mouse-x);
  top: var(--mouse-y);
}

.resize {
  width: 200px;

}



@-webkit-keyframes spin {
  from { -webkit-transform: rotateY(0); }
  to   { -webkit-transform: rotateY(-360deg); }
}  

.ring > .one {
  -webkit-transform: translateZ(380px);
}  

.ring > .two {
  -webkit-transform: rotateY(30deg) translateZ(380px);
}  

.ring > .three {
  -webkit-transform: rotateY(60deg) translateZ(380px);
}  

.ring > .four {
  -webkit-transform: rotateY(90deg) translateZ(380px);
}  

.ring > .five {
  -webkit-transform: rotateY(120deg) translateZ(380px);
}  

.ring > .six {
  -webkit-transform: rotateY(150deg) translateZ(380px);
}  

.ring > .seven {
  -webkit-transform: rotateY(180deg) translateZ(380px);
}  

.ring > .eight {
  -webkit-transform: rotateY(210deg) translateZ(380px);
}  

.ring > .nine {
  -webkit-transform: rotateY(-120deg) translateZ(380px);
}  

.ring > .ten {
  -webkit-transform: rotateY(-90deg) translateZ(380px);
}  

.ring > .eleven {
  -webkit-transform: rotateY(300deg) translateZ(380px);
}  

.ring > .twelve {
  -webkit-transform: rotateY(330deg) translateZ(380px);
}  
```
   
***Features:***

-   *Basic informtaion on each sneaker including:*
    * Name of the sneaker
    * Colorway
    * Basic Description
    * Release date / retail price
    * Links to the product to each respective marketplace
    
    

    **SneakerDial Home Page:**
    
    ![](sneakgif.gif)
    
    
    **Catalog View Page:** 
    
    ![image](https://user-images.githubusercontent.com/34076045/217715746-0042790b-aae6-414d-8345-cc2f84595d9c.png)


-  Future implementations:
   *  Implement a backend and make a user portfolio to add their own pairs
   *  Use a sneaker API with the backend and implement live price information as well as YTD price trends
   *  Refactor the spinning ring to change direction using the users mouse position
