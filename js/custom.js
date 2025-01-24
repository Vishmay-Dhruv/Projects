function changeClass(id){

    //  GET IMG OF CLICKED SIDEBAR LINK
    let getImg = document.getElementById(id+'_img');

    // GET SRC OF THAT IMG LINK
    let imgSrc = getImg.getAttribute('src');
    console.log("img src: "+imgSrc);

    // CHANGE THE SRC TO ACTIVE OF THE CLICKED SIDEBAR LINK
    getImg.src = "images/"+id+"-active.svg";

    console.log("Image Src that is be activated : " + getImg.getAttribute('src'));


    let sidebarList = document.getElementsByClassName('sidebarlist');
    console.log(sidebarList[0].children)
    for (const element of sidebarList[0]) {
      if (element.firstElementChild.id == id+'_img') {
        // LEAVE THE CLICKED LINK
        var activatedID = element.firstElementChild.id ;
        continue;
      }

      console.log("id : "+element.firstElementChild.id);

      // GET ALL OTHERS IMG I.E EITHER THEY ARE ACTIVE OR DEFAULT.   
      var inactivateImg = document.getElementById(element.firstElementChild.id);

     // THE SRC OF THE IMAGES  
      var inActiveImgSrc = inactivateImg.getAttribute('src');

      // IF ANY OF THAT IMAGE CONTAINS active IN ITS SRC THAT IT SHOULD BE CHANGED.   
      if(inActiveImgSrc.includes("active")){
        console.log("To be inactivated id : " + element.firstElementChild.id.split('_')[0] + "  img src : "+inActiveImgSrc);
        inactivateImg.src = "images/"+element.firstElementChild.id.split('_')[0]+"-default.svg";
      }
    }
  }