/*global console*/



var headerSec = document.createElement('section'),
    navbarDiv = document.createElement('div');

    // Create Container For Header
    var myCont = document.createElement('div');
          myCont.style.width = "1200px";
          myCont.style.margin = "auto";
          myCont.setAttribute('class', 'container');


    // Body margin =0
    document.body.style.margin = '0px';

    document.body.appendChild(headerSec);


    // make a class to header section
var myAttr = document.createAttribute('class');
    myAttr.value="header";
    headerSec.setAttributeNode(myAttr);
    headerSec.style.height ='600px';

    //insert image to the section
var  myImg = document.createElement('img');

    headerSec.appendChild(myImg);
    // style the image
    myImg.setAttribute('src', 'images/header.jpg');
    myImg.style.width ='100%';
    myImg.style.height ='100%';
    myImg.style.backgroundSize ='cover';

    // append div to header section and make class
    headerSec.appendChild(navbarDiv);
    navbarDiv.setAttribute('class','navbar');

    // Make Style to navbar
    navbarDiv.style.position = 'absolute';
    navbarDiv.style.top = '10px';
    navbarDiv.style.right = '0';
    navbarDiv.style.left = '0';
    navbarDiv.style.background = 'none';

    // insert Container div inside navbar
    navbarDiv.appendChild(myCont);

    // create logo div
var logoDiv = document.createElement('div'),
    logoLink = document.createElement('a');

    myCont.appendChild(logoDiv)
    logoDiv.setAttribute('class', 'logo');
    logoDiv.appendChild(logoLink);

    // Make Style To the Logo
    logoLink.textContent = "Transit";
    logoLink.setAttribute('href', '#');
    logoLink.setAttribute('target', '_blank');
    logoLink.style.float = 'left';
    logoLink.style.textDecoration = 'none';
    logoLink.style.color = '#FFF';
    logoLink.style.marginTop = '45px';
    logoLink.style.marginLeft = '5.6rem';
    logoLink.style.fontSize = '30px';


    // Making A list of Links

  var slides = ["Home", "Genric", "Elements","SignUp"];
  function makeUL(slides) {

    // create The List
    var list = document.createElement('ul');

       list.style.listStyle = 'none';
       list.style.float = 'right';
       list.style.padding = '0';
       list.style.overflow = 'hidden'

    for (var i = 0; i < slides.length; i++) {

      var item = document.createElement('li');
      item.appendChild(document.createTextNode(slides[i]));

      // Styling The list
      list.appendChild(item);
       item.style.float= "left";
       item.style.padding= "10px";
       item.style.color= "#CDCFCF";
       item.style.marginLeft= "10px";
       item.style.fontSize = "18px";
       item.style.marginTop = "30px";
       item.style.cursor = 'pointer'
    }

     // Style The SignUp Button
    list.childNodes[3].style.backgroundColor = "#FFF";
    list.childNodes[3].style.color = "#6F6F6F";
    list.childNodes[3].style.border = "0 solid #000";
    list.childNodes[3].style.borderRadius = "20px";
    list.childNodes[3].style.padding = "0 10px";
    list.childNodes[3].style.marginTop = "30px";
    list.childNodes[3].style.textAlign = "center";
    list.childNodes[3].style.fontSize = "16px";
    list.childNodes[3].style.lineHeight = "2.25em";

    // Make a Hover Effect on The Button
    if(list.childNodes[3].onmouseenter = function () {
      'use strict';

      list.childNodes[3].style.backgroundColor = "aliceblue"

    });
    if (list.childNodes[3].onmouseleave = function () {
      'use strict';
      list.childNodes[3].style.backgroundColor = "#FFF"
    });


    return list;

  }
  myCont.appendChild(makeUL(slides));



// Make The Intro Of The Header Section
var introDiv = document.createElement('div'),
    introH = document.createElement('h1'),
    introP = document.createElement('p'),
    introBtn = document.createElement('button');


    myCont.appendChild(introDiv);
    introDiv.setAttribute('class', 'intro');
  // styling The Intro Div
    introDiv.style.position = 'absolute';
    introDiv.style.top = '13rem';
    introDiv.style.right = '0';
    introDiv.style.left = '0';
    introDiv.style.textAlign = 'center';

// styling The Intro Elements

    introDiv.appendChild(introH);
    introH.textContent = "Hi. This is Transit."
    introH.style.color = '#CDCFCF'
    introH.style.fontSize = '30px'
  // Styling The Paragraph
    introDiv.appendChild(introP);
    introP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    introP.style.color = '#CDCFCF'
    introP.style.fontSize = '21px'

  // Styling The button
    introDiv.appendChild(introBtn);
    introBtn.textContent = "Lorem ipsum dolor";
    introBtn.style.backgroundColor = '#51B6D9'
    introBtn.style.color = '#FFF'
    introBtn.style.border = '0 solid #FFF'
    introBtn.style.borderRadius = '20px'
    introBtn.style.width = '20%'
    introBtn.style.height = '50px'
    introBtn.style.fontSize = '20px';
    introBtn.style.wordSpacing = '3px'

    if(introBtn.onmouseenter = function () {
      'use strict';

      introBtn.style.backgroundColor = "cornflowerblue";
      introBtn.style.cursor = 'pointer'

    });
    if (introBtn.onmouseleave = function () {
      'use strict';
      introBtn.style.backgroundColor = "#51B6D9"
    });


/* End Section Header */


/* Start Section Service */

var serviceSec = document.createElement('section'),
    mainDiv = document.createElement('div');
    // Create Container For Header
var myCont = document.createElement('div');
      myCont.style.width = "1200px";
      myCont.style.margin = "auto";
      myCont.setAttribute('class', 'container');

    document.body.appendChild(serviceSec);
    serviceSec.setAttribute('class', 'services');


    serviceSec.appendChild(myCont);
    serviceSec.appendChild(mainDiv);
    myCont.appendChild(mainDiv);
    mainDiv.setAttribute('class', 'servicehead');
    serviceSec.style.textAlign = 'center';
    serviceSec.style.paddingTop = '65px';
    serviceSec.style.backgroundColor = 'rgb(241, 239, 239)';
    serviceSec.style.height = '450px';

var serviceH = document.createElement('h2'),
    serviceP = document.createElement('p');


    mainDiv.appendChild(serviceH);
    serviceH.textContent = "Consectetur adipisicing elit"

    mainDiv.appendChild(serviceP);
    serviceP.textContent = "Lorem ipsum dolor sit amet, delectus consequatur, similique quia!"

    var contentDiv = document.createElement('div'),
        firstDiv = document.createElement('div'),
        secondDiv = document.createElement('div'),
        thirdDiv = document.createElement('div');

        mainDiv.appendChild(contentDiv);
        contentDiv.setAttribute('class', 'content');
        contentDiv.style.marginTop = '30px';
        contentDiv.style.display = "flex";
        contentDiv.style.justifyContent = "space-between";

    var myIcon = document.createElement('i'),
        serviceH = document.createElement('h4'),
        serviceP = document.createElement('p');

        contentDiv.appendChild(firstDiv);
        firstDiv.setAttribute('class', 'first-service');
        firstDiv.style.width = '30%';
        firstDiv.style.height = "300px";
        firstDiv.style.backgroundColor = "#FFF";

        // Add Icon
        firstDiv.appendChild(myIcon);

        //Style Icon
        myIcon.setAttribute('class', 'fa fa-cloud fa-3x');
        myIcon.style.borderRadius = '50%';
        myIcon.style.padding = "30px";
        myIcon.style.backgroundColor = "#3CADD4";
        myIcon.style.color = "#FFF";
        myIcon.style.fontSize = "4rem";
        myIcon.style.marginTop = "25px";

        // Add Content (First Service)
        firstDiv.appendChild(serviceH);
        //Style Heading
        serviceH.textContent = "Lorem ipsum dolor";
        serviceH.style.color = "#a1a1a1"
        serviceH.style.fontSize = "18px";
        serviceH.style.fontWeight = "900";

        // Styling The Paragraph
        firstDiv.appendChild(serviceP);
        serviceP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consectetur quibusdam magni minus aut modi aliquid quibusda.";
        serviceP.style.color = "#6F6F6F";
        serviceP.style.fontSize = "12px";
        serviceP.style.wordSpacing = "3px";
        serviceP.style.fontSize = "14px";
        serviceP.style.padding = "3px";


        // Add Content (Second Service)
        contentDiv.appendChild(secondDiv);
        secondDiv.setAttribute('class', 'second-service');
        secondDiv.style.width = '30%';
        secondDiv.style.height = "300px";
        secondDiv.style.backgroundColor = "#FFF";

var mySecondIcon = document.createElement('i'),
    secondServiceH = document.createElement('h4'),
    secondServiceP = document.createElement('p')

        // Add Icon
        secondDiv.appendChild(mySecondIcon);

        //Style Icon
        mySecondIcon.setAttribute('class', 'fa fa-television fa-3x');
        mySecondIcon.style.borderRadius = '50%';
        mySecondIcon.style.padding = "30px";
        mySecondIcon.style.backgroundColor = "#D43C61";
        mySecondIcon.style.color = "#FFF";
        mySecondIcon.style.fontSize = "4rem";
        mySecondIcon.style.marginTop = "25px";

        // Add Content (Second Service)
        secondDiv.appendChild(secondServiceH);
        //Style Heading
        secondServiceH.textContent = "Lorem ipsum dolor";
        secondServiceH.style.color = "#a1a1a1"
        secondServiceH.style.fontSize = "18px";
        secondServiceH.style.fontWeight = "900";


        // Styling The Paragraph
        secondDiv.appendChild(secondServiceP);
        secondServiceP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consectetur quibusdam magni minus aut modi aliquid quibusda.";
        secondServiceP.style.color = "#6F6F6F";
        secondServiceP.style.fontSize = "12px";
        secondServiceP.style.wordSpacing = "3px";
        secondServiceP.style.fontSize = "14px";
        secondServiceP.style.padding = "3px";


        contentDiv.appendChild(thirdDiv);
        thirdDiv.setAttribute('class', 'third-service');
        thirdDiv.style.width = '30%';
        thirdDiv.style.height = "300px";
        thirdDiv.style.backgroundColor = "#FFF";

var myThirdIcon = document.createElement('i'),
    thirdServiceH = document.createElement('h4'),
    thirdServiceP = document.createElement('p')

        // Add Icon
        thirdDiv.appendChild(myThirdIcon);

        //Style Icon
        myThirdIcon.setAttribute('class', 'fa fa-rocket fa-3x');
        myThirdIcon.style.borderRadius = '50%';
        myThirdIcon.style.padding = "30px";
        myThirdIcon.style.backgroundColor = "#ADD43C";
        myThirdIcon.style.color = "#FFF";
        myThirdIcon.style.fontSize = "4rem";
        myThirdIcon.style.marginTop = "25px";

        // Add Content (Second Service)
        thirdDiv.appendChild(thirdServiceH);
        //Style Heading
        thirdServiceH.textContent = "Lorem ipsum dolor";
        thirdServiceH.style.color = "#a1a1a1"
        thirdServiceH.style.fontSize = "18px";
        thirdServiceH.style.fontWeight = "900";


        // Styling The Paragraph
        thirdDiv.appendChild(thirdServiceP);
        thirdServiceP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consectetur quibusdam magni minus aut modi aliquid quibusda.";
        thirdServiceP.style.color = "#6F6F6F";
        thirdServiceP.style.fontSize = "12px";
        thirdServiceP.style.wordSpacing = "3px";
        thirdServiceP.style.fontSize = "14px";
        thirdServiceP.style.padding = "3px";


  /* End Service Section*/


  /* Start Section Our Team */


  var ourTeamSec = document.createElement('section'),
      //ourTeamHead = document.createElement('div'),
      ourTeamInfo = document.createElement('div'),
      ourTeamH = document.createElement('h2'),
      ourTeamP = document.createElement('p'),
      ourHR = document.createElement('hr');

      // The Container
      myCont = document.createElement('div');
        myCont.style.width = "1200px";
        myCont.style.margin = "auto";
        myCont.setAttribute('class', 'container');

        //insert the container
        document.body.appendChild(ourTeamSec);
        ourTeamSec.setAttribute('class', 'our-team');
        // add the  container to the section
        ourTeamSec.appendChild(myCont);
        ourTeamSec.style.textAlign = "center";
        ourTeamSec.style.height = "580px";

        // style the header
        myCont.appendChild(ourTeamH);
        ourTeamH.textContent = "Lorem ipsum dolor sit";
        ourTeamH.style.color = "#474747";
        ourTeamH.style.fontSize = "40px";
        ourTeamH.style.marginBottom = "2px";

        // style the paragraoh
        myCont.appendChild(ourTeamP);
        ourTeamP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.adipisicing elit";
        ourTeamP.style.color = "#8F8F8F";
        ourTeamP.style.fontSize = "18px";

        // add Hr
        myCont.appendChild(ourHR);
        ourHR.style.border = "0.3px dashed #afafaf"
        ourHR.style.marginBottom = "20px";


        // The Team Content
        myCont.appendChild(ourTeamInfo);
        ourTeamInfo.setAttribute('class', 'teamContent');
        ourTeamInfo.style.display = "flex";
        ourTeamInfo.style.justifyContent = "space-between";
        ourTeamInfo.style.marginBottom = "15px 0 10px 0"


    var memberOne = document.createElement('div'),
        memberOneImg = document.createElement('img'),
        memberOneH = document.createElement('h5'),
        memberOneP = document.createElement('p');

        // Styling First Member
        ourTeamInfo.appendChild(memberOne);
        memberOne.setAttribute('class', 'member1');
        // Image
        memberOne.appendChild(memberOneImg);
        memberOneImg.setAttribute('src', 'images/ancelotti.jpg');
        memberOneImg.setAttribute('title', 'Carlo Ancelotti');
        memberOneImg.style.borderRadius ="50%"
        // Head
        memberOne.appendChild(memberOneH);
        memberOneH.textContent = "Coach"
        memberOneH.style.fontSize ="18px";
        memberOneH.style.margin ="8px 0 0 0";
        memberOneH.style.color ="#afafaf";
        // Paragragh
        memberOne.appendChild(memberOneP);
        memberOneP.textContent = "Mr.Carlo Ancelotti"
        memberOneP.style.fontWeight ="900";
        memberOneP.style.margin ="5px 0 0 0";
        memberOneP.style.color ="#504e4e";



    var memberTwo= document.createElement('div'),
        memberTwoImg = document.createElement('img'),
        memberTwoH = document.createElement('h5'),
        memberTwoP = document.createElement('p');

        // Styling Second Member
        ourTeamInfo.appendChild(memberTwo);
        memberTwo.setAttribute('class', 'member2');
        // Image
        memberTwo.appendChild(memberTwoImg);
        memberTwoImg.setAttribute('src', 'images/zidan.jpg');
        memberTwoImg.setAttribute('title', 'ZiZoOoOo');
        memberTwoImg.style.borderRadius ="50%"
        // Head
        memberTwo.appendChild(memberTwoH);
        memberTwoH.textContent = "Assistant Coach"
        memberTwoH.style.fontSize ="18px";
        memberTwoH.style.margin ="8px 0 0 0";
        memberTwoH.style.color ="#afafaf";
        // Paragragh
        memberTwo.appendChild(memberTwoP);
        memberTwoP.textContent = "Zinedine Zidan";
        memberTwoP.style.fontWeight ="900";
        memberTwoP.style.margin ="5px 0 0 0";
        memberTwoP.style.color ="#504e4e";

    var memberThree = document.createElement('div'),
        memberThreeImg = document.createElement('img'),
        memberThreeH = document.createElement('h5'),
        memberThreeP = document.createElement('p');

        // Styling Three Member
        ourTeamInfo.appendChild(memberThree);
        memberThree.setAttribute('class', 'member3');
        // Image
        memberThree.appendChild(memberThreeImg);
        memberThreeImg.setAttribute('src', 'images/isco.jpg');
        memberThreeImg.setAttribute('title', 'The Dribbler');
        memberThreeImg.style.borderRadius ="50%"

        // Head
        memberThree.appendChild(memberThreeH);
        memberThreeH.textContent = "Best Dribbler"
        memberThreeH.style.fontSize ="18px";
        memberThreeH.style.margin ="8px 0 0 0";
        memberThreeH.style.color ="#afafaf";

        // Paragragh
        memberThree.appendChild(memberThreeP);
        memberThreeP.textContent = "Isco Alarcon";
        memberThreeP.style.fontWeight ="900";
        memberThreeP.style.margin ="5px 0 0 0";
        memberThreeP.style.color ="#504e4e";

    var memberFour = document.createElement('div'),
        memberFourImg = document.createElement('img'),
        memberFourH = document.createElement('h5'),
        memberFourP = document.createElement('p');

        // Styling Four Member
        ourTeamInfo.appendChild(memberFour);
        memberFour.setAttribute('class', 'member4');
        // Image
        memberFour.appendChild(memberFourImg);
        memberFourImg.setAttribute('src', 'images/modric.jpg');
        memberFourImg.setAttribute('title', 'The Magician');
        memberFourImg.style.borderRadius ="50%"
        // Head
        memberFour.appendChild(memberFourH);
        memberFourH.textContent = "Magician"
        memberFourH.style.fontSize ="18px";
        memberFourH.style.margin ="8px 0 0 0";
        memberFourH.style.color ="#afafaf";
        // Paragraph
        memberFour.appendChild(memberFourP);
        memberFourP.textContent = "Luka Modric";
        memberFourP.style.fontWeight ="900";
        memberFourP.style.margin ="5px 0 0 0";
        memberFourP.style.color ="#504e4e";


var ourHr = document.createElement('hr');
    ourTeamP2 = document.createElement('p'),
    ourTeamBtn = document.createElement('button');

    // Add Hr
        myCont.appendChild(ourHr);
        ourHr.style.border = "0.4px dashed #afafaf"
        ourHr.style.marginTop = "25px"

      // Style Paragraph
        myCont.appendChild(ourTeamP2);
        ourTeamP2.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore illum, temporibus veritatis eligendi, aliquam,dolor enim itaque veniam aut eaque sequi qui quia vitae pariatur repudiandae ab dignissimos ex!";
        ourTeamP2.style.color = "#8F8F8F";
        ourTeamP2.style.fontSize = "19px";
        ourTeamP2.style.wordSpacing = "3px";
        ourTeamP2.style.lineHeight = "1.5";

        myCont.appendChild(ourTeamBtn);

        ourTeamBtn.textContent = "Lorem ipsum dolor";
        ourTeamBtn.style.backgroundColor = '#51B6D9'
        ourTeamBtn.style.color = '#FFF'
        ourTeamBtn.style.border = '0 solid #FFF'
        ourTeamBtn.style.borderRadius = '20px'
        ourTeamBtn.style.width = '20%'
        ourTeamBtn.style.height = '50px'
        ourTeamBtn.style.fontSize = '20px';
        ourTeamBtn.style.wordSpacing = '3px'

        // Button Hover

        if(ourTeamBtn.onmouseenter = function () {
          'use strict';

          ourTeamBtn.style.backgroundColor = "cornflowerblue";
          ourTeamBtn.style.cursor = 'pointer'

        });
        if (ourTeamBtn.onmouseleave = function () {
          'use strict';
          ourTeamBtn.style.backgroundColor = "#51B6D9"
        });


/* End Our Team Section */


/* Start Section Contact Us */

var contactSec = document.createElement('section'),
    contactInfo = document.createElement('div'),
    contactH = document.createElement('h4'),
    contactP = document.createElement('p');

    document.body.appendChild(contactSec);
    contactSec.setAttribute('class', 'contact-us');
    contactSec.style.backgroundColor = "#3CADD4";
    contactSec.style.height = "550px";
    contactSec.style.textAlign = "center";
    contactSec.style.overflow = "hidden";

var myCont = document.createElement('div');
      myCont.style.width = "1200px";
      myCont.style.margin = "auto";
      myCont.setAttribute('class', 'container');

      // add the container
      contactSec.appendChild(myCont);

// Contact Div
      myCont.appendChild(contactInfo);
      contactInfo.setAttribute('class', 'contact');
      contactInfo.style.marginTop = "40px";

// Contact Head
      contactInfo.appendChild(contactH);
      contactH.textContent = "Consectetur adipisicing elit";
      contactH.style.color = "#FFF";
      contactH.style.fontSize = "24px";
      contactH.style.margin = "0";
//Contact Paragraph
      contactInfo.appendChild(contactP);
      contactP.textContent = "Lorem ipsum dolor sit amet. Delectus consequatur, similique quia!"
      contactP.style.color = "#CECECE";
      contactP.style.fontSize = "18px";


      // Add Form

var contactForm = document.createElement('form'),
    nameInput = document.createElement('input'),
    emailInput = document.createElement('input'),
    msgText = document.createElement('textarea'),
    sendBtn = document.createElement('button');


    myCont.appendChild(contactForm);

    contactForm.appendChild(nameInput);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    nameInput.style.width = "25%";
    nameInput.style.height = "30px";
    nameInput.style.borderRadius = "5px";
    nameInput.style.marginLeft = "20px";


    contactForm.appendChild(emailInput);
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'E-mail');
    emailInput.style.width = "25%";
    emailInput.style.height = "30px";
    emailInput.style.borderRadius = "5px";
    emailInput.style.marginLeft = "20px";


// add Br
var myBr = document.createElement('br');
    contactForm.appendChild(myBr);

    contactForm.appendChild(msgText);
    msgText.setAttribute('placeholder', 'Messege')
    msgText.style.width = "52%";
    msgText.style.height = "200px";
    msgText.style.border = "0px solid transparent";
    msgText.style.borderRadius = "5px";
    msgText.style.resize = "none";
    msgText.style.margin = "25px 0 25px 25px";


    // add Br
    var myBR = document.createElement('br');
        contactForm.appendChild(myBR);

    contactForm.appendChild(sendBtn);
    sendBtn.textContent = "Send Messege";

    sendBtn.style.backgroundColor = "#333640";
    sendBtn.style.color = "#FFF";
    sendBtn.style.border = "0px solid #FFF";
    sendBtn.style.borderRadius = "20px";
    sendBtn.style.width = "15%";
    sendBtn.style.height = "50px";
    sendBtn.style.fontSize = "19px";

    // Button Hover

    if(sendBtn.onmouseenter = function () {
      'use strict';

      sendBtn.style.backgroundColor = "#444751";
      sendBtn.style.cursor = 'pointer'

    });
    if (sendBtn.onmouseleave = function () {
      'use strict';
      sendBtn.style.backgroundColor = "#333640"
    });

    /* End Section Contact Us */


/* Start Section Footer */

var footerSec = document.createElement('section'),
    footerDiv = document.createElement('div'),
    footerP = document.createElement('p');



      document.body.appendChild(footerSec);
      footerSec.setAttribute('class', 'footer');
      footerSec.style.backgroundColor = "#383B43";
      footerSec.style.height = "70px";
      footerSec.style.overflow = "hidden";


      var myCont = document.createElement('div');
            myCont.style.width = "1200px";
            myCont.style.margin = "auto";
            myCont.setAttribute('class', 'container');

      // add the container
      footerSec.appendChild(myCont);


       myCont.appendChild(footerDiv);
       footerDiv.setAttribute('class', 'ifno')

       footerDiv.appendChild(footerP);
       footerP.textContent = "Copyright Reserved To Elzero Web School"
       footerP.style.textAlign = "center";
       footerP.style.fontSize = '20px';
       footerP.style.color = 'aliceblue';
