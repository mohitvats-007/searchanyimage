 const accesskey="CVnH5kfgBkClRAfbINoctFnQd6ZHLh22CYcWmLDS7rw";
 
 const formE1= document.querySelector("form")
 const inputE1= document.getElementById("search-input")
 const searchresults= document.querySelector(".search-results")
 const showmore= document.getElementById("show-more-button")

 let inputdata=""
 let page= 1;

 async function searchimages(){
    inputdata= inputE1.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`
    const response= await fetch(url)
    const data = await response.json()
   console.log(data);
    const results= data.results;

    if(page===1){
        searchresults.innerHTML="";

    }
    results.map((result)=>{
        const imagewrapper=document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image= document.createElement("img");
        image.src=result.urls.small
        image.alt= result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;


        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imageLink)
        searchresults.appendChild(imagewrapper);

    
    })
    page++;
    if(page>1){
        showmore.style.display="block";
    }
 }
 formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchimages();
 });
 showmore.addEventListener("click",()=>{
    searchimages();
 })