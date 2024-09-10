window.addEventListener("load",function(){
    let goup = document.querySelector(".gototop")
    this.addEventListener("scroll", function(){
       if (this.scrollY<300) {
            console.log(this.scrollY)
            console.log(goup.style.backgroundColor)
            goup.style.visibility = "hidden"
       }
       else{
            goup.style.visibility = "visible"
       }
    })

})