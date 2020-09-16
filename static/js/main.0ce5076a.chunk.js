(this["webpackJsonpsean-zhan-website"]=this["webpackJsonpsean-zhan-website"]||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t.n(r),o=(t(87),t(88),t(27)),s=t(10),i=t(7),m=t(5),A=t(9),d=t(8),h=(t(89),t(71)),p=t(138),u=t(119),g=t(62),E=t.n(g),b=t(63),v=t.n(b),C=t(64),f=t.n(C),w=Object(h.a)({palette:{primary:{main:"#ffffff"}}}),y=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={iconSize:"4.2vh"},n}return Object(m.a)(t,[{key:"openLink",value:function(e){var a;switch(e){case"github":a="https://github.com/seanzhan0319";break;case"linkedin":a="https://www.linkedin.com/in/sean-zhan/";break;case"facebook":a="https://www.facebook.com/profile.php?id=100007085505442"}window.open(a,"_blank")}},{key:"openResume",value:function(){window.open("https://drive.google.com/file/d/1QdTP497UZiekfqdF43tuife-y4ssn3kA/view?usp=sharing","_blank")}},{key:"render",value:function(){var e=this;return l.a.createElement("ul",{className:"NavBar-ul"},l.a.createElement("div",{className:"left"},l.a.createElement(p.a,{theme:w},l.a.createElement(u.a,null,l.a.createElement(E.a,{style:{height:this.state.iconSize,width:this.state.iconSize,color:"white"},onClick:function(){return e.openLink("github")}})),l.a.createElement(u.a,null,l.a.createElement(v.a,{style:{height:this.state.iconSize,width:this.state.iconSize,color:"white"},onClick:function(){return e.openLink("linkedin")}})),l.a.createElement(u.a,null,l.a.createElement(f.a,{style:{height:this.state.iconSize,width:this.state.iconSize,color:"white"},onClick:function(){return e.openLink("facebook")}})))),l.a.createElement("div",{className:"right"},l.a.createElement("li",{className:"Navbar-li"},l.a.createElement(o.b,{to:"/leadership"},"Leadership"))),l.a.createElement("div",{className:"right"},l.a.createElement("li",{className:"Navbar-li"},l.a.createElement(o.b,{to:"/projects"},"Projects"))),l.a.createElement("div",{className:"right"},l.a.createElement("li",{className:"Navbar-li"},l.a.createElement(o.b,{to:"/experience"},"Experience"))),l.a.createElement("div",{className:"right"},l.a.createElement("li",{className:"Navbar-li"},l.a.createElement(o.b,{to:"/"},"Home"))))}}]),t}(n.Component),N=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"5%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#009688"}},l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("div",{className:"footer"},"Designed by Sean Zhan |",l.a.createElement("a",{className:"footer-resume",href:"https://seanzhan.com/docs/Sean_Xiao_Zhan.pdf",target:"_blank"},"Resume"))))}}]),t}(n.Component),B=(t(57),t(96),t(65)),k=t.n(B),j=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"openResume",value:function(){window.open("https://drive.google.com/file/d/1QdTP497UZiekfqdF43tuife-y4ssn3kA/view?usp=sharing","_blank")}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(y,null),l.a.createElement("div",{className:"home-container"},l.a.createElement("img",{className:"proRec",src:k.a,alt:"SeanZhanPhoto"}),l.a.createElement("div",{className:"group2"},l.a.createElement("div",{className:"name-resume"},l.a.createElement("div",{className:"name"},"Sean (Xiao) Zhan")),l.a.createElement("br",null),l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"intro-paragraph"},"I'm an aspiring student at Brown University concentrating in Computer Science and Applied Math."),l.a.createElement("br",null),"I'm experienced in full-stack web application development. My strengths mainly lie in building versatile back-ends and customer-focused products. I'm energetic, insightful, a team player, and I can always find creative ways to solve problems. ",l.a.createElement("br",null),l.a.createElement("br",null),"In my free time, I play Ultimate Frisbee, build and race drones, and play the guitar."))),l.a.createElement(N,null))}}]),t}(n.Component),Q=t(22),I=t(12),U=(t(58),t(139)),S=t(140),x=t(144),F=t(142),K=t(141),O=t(145),T=t(143),M=t(50),G=t.n(M),J=t(66),W=t.n(J),Y=t(67),L=t.n(Y),D=t(68),R=t.n(D),Z=t(69),P=t.n(Z),q=t(70),V=t.n(q),z=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={panel1:!1,panel2:!1,panel3:!1,panel4:!1},n.handleChange=n.handleChange.bind(Object(I.a)(n)),n.cardGenerator=n.cardGenerator.bind(Object(I.a)(n)),n.whichPanel=n.whichPanel.bind(Object(I.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(Q.a)({},e,!this.state[e]))}},{key:"whichPanel",value:function(e){console.log(e),this.props.history.push("/projects/"+e)}},{key:"cardGenerator",value:function(e,a,t,n){var r=this;return l.a.createElement("div",{className:"card-container"},l.a.createElement(U.a,{style:{boxShadow:"none"}},l.a.createElement(S.a,{onClick:function(){return r.whichPanel(e)}},l.a.createElement(K.a,{style:{height:"250px"},image:a,title:"Contemplative Reptile"}),l.a.createElement(F.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"card-content"},t),l.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p",className:"card-content"},n))),l.a.createElement(x.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement(O.a,{size:"small",color:"default",onClick:function(){return r.whichPanel(e)}},"Learn More"))))}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(y,null),l.a.createElement("div",{className:"component-container"},l.a.createElement("p",{className:"component-header"},"Projects"),l.a.createElement("div",{className:"card-flex-container"},this.cardGenerator("drone",W.a,"Autonomous Drone Flight","Programmed an open-source DJI Tello drone and incorporated a body-detection image-recognition algorithm (OpenPose) to achieve autonomous flight."),this.cardGenerator("relearn",V.a,"Reinforcement Learning Projects","Implemented Deep Q Networks and wrote agents to beat various games such as the Cart-Pole problem where a moving cart learns to balance a tall pole."),this.cardGenerator("tictactoe",P.a,"Tic-Tac-Toe iOS App","Programmed an iOS App that allows two users to play against each other while keeping track of their scores."),this.cardGenerator("connect4",L.a,"Connect-4 Game","Implemented the minimax algorithm and alpha-beta pruning. The game A.I. can play against human players and other A.I.'s. My algorithm beat 95% of other A.I.'s in the class."),this.cardGenerator("search",R.a,"Search Algorithm","Programmed a search algorithm that presents most relevant Wikipedia pages given an input. The algorithm handles large-scale data and queries 50% faster than requirement for full credit. ")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),H=(t(97),t(51)),X=t.n(H),_=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={panel1:!1,panel2:!1,panel3:!1,panel4:!1},n.handleChange=n.handleChange.bind(Object(I.a)(n)),n.cardGenerator=n.cardGenerator.bind(Object(I.a)(n)),n.whichPanel=n.whichPanel.bind(Object(I.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(Q.a)({},e,!this.state[e]))}},{key:"whichPanel",value:function(e){console.log(e),this.props.history.push("/experience/"+e)}},{key:"cardGenerator",value:function(e,a,t,n,r){var c=this;return l.a.createElement("div",{className:"card-container"},l.a.createElement(U.a,{style:{boxShadow:"none"}},l.a.createElement(S.a,{onClick:function(){return c.whichPanel(e)}},l.a.createElement(K.a,{style:{height:"180px"},image:a,title:"Contemplative Reptile"}),l.a.createElement(F.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"card-content"},t),l.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p",className:"card-content"},n," ",l.a.createElement("br",null),l.a.createElement("br",null)," ",r))),l.a.createElement(x.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement(O.a,{size:"small",color:"default",onClick:function(){return c.whichPanel(e)}},"Learn More"))))}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(y,null),l.a.createElement("div",{className:"component-container"},l.a.createElement("p",{className:"component-header"},"Experience"),l.a.createElement("div",{className:"card-flex-container"},this.cardGenerator("malle",G.a,"Lead Full-Stack Web Developer","Developed two modular and scalable React web apps that allow Brown's Malle Lab researchers to study people's perception of fairness in criminal justice.","June 2020 - Present"),this.cardGenerator("IoT",X.a,"Internet of Things Consultant","Brainstormed, examined academic research papers, and analyzed corporation reports with IoT Consulting Group to co-edit a research paper.","Nov 2019 - Jan 2020")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),$=(n.Component,t(98),t(148)),ee=t(147),ae=t(146),te=t(34),ne=t.n(te),le=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={panel1:!1,panel2:!1,panel3:!1,panel4:!1},n.handleChange=n.handleChange.bind(Object(I.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(Q.a)({},e,!this.state[e]))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(y,null),l.a.createElement("p",{className:"component-header"},"Leadership"),l.a.createElement("div",{className:"acc-container"},l.a.createElement($.a,{expanded:this.state.panel1,style:{boxShadow:"none"},onChange:function(){return e.handleChange("panel1")}},l.a.createElement(ae.a,{style:{backgroundColor:"#80cbc4"},expandIcon:l.a.createElement(ne.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement("div",{className:"summary-container"},l.a.createElement("div",{className:"summary"},"Treasurer, Board Member",l.a.createElement("br",null),l.a.createElement("div",{className:"summary-time"},"Sep 2019 - Present")),l.a.createElement("div",{className:"summary-sub"},"Brown University Chinese Student Association"))),l.a.createElement(ee.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement("ul",{className:"project-des"},l.a.createElement("li",{className:"bullet-point"},"2020 Fall - Organized an event to send care packages to incoming freshman Chinese American students and welcome them to Brown University virtually."),l.a.createElement("li",{className:"bullet-point"},"2019 School Year - Hosted Lunar New Year Show to celebrate Chinese culture. Coordinated with performers and directed the show with an auction to donate to COVID-19 relief in China."))))),l.a.createElement("br",null),l.a.createElement("div",{className:"acc-container"},l.a.createElement($.a,{expanded:this.state.panel2,style:{boxShadow:"none"},onChange:function(){return e.handleChange("panel2")}},l.a.createElement(ae.a,{style:{backgroundColor:"#80cbc4"},expandIcon:l.a.createElement(ne.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement("div",{className:"summary-container"},l.a.createElement("div",{className:"summary"},"Advanced Physics Tutor and Advocate",l.a.createElement("br",null),l.a.createElement("div",{className:"summary-time"},"Sep 2019 - May 2020")),l.a.createElement("div",{className:"summary-sub"},"Local High School"))),l.a.createElement(ee.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement("ul",{className:"project-des"},l.a.createElement("li",{className:"bullet-point"},"Taught Advanced Placement Physics at Hope High School as a TA for two hours each week."),l.a.createElement("li",{className:"bullet-point"},"Bonded with inner-city students, helped improve their understanding of the material, and advocated for them when their teacher crossed boundaries."))))),l.a.createElement("br",null),l.a.createElement("div",{className:"acc-container"},l.a.createElement($.a,{expanded:this.state.panel3,style:{boxShadow:"none"},onChange:function(){return e.handleChange("panel3")}},l.a.createElement(ae.a,{style:{backgroundColor:"#80cbc4"},expandIcon:l.a.createElement(ne.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement("div",{className:"summary-container"},l.a.createElement("div",{className:"summary"},"Prefect - High School Senior Community Leader",l.a.createElement("br",null),l.a.createElement("div",{className:"summary-time"},"Sep 2018 - May 2019")),l.a.createElement("div",{className:"summary-sub"},"Cate School"))),l.a.createElement(ee.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement("ul",{className:"project-des"},l.a.createElement("li",{className:"bullet-point"},"Lived in a freshman boys dorm to guide and support students, such as resolving conflicts, organizing dorm olympics, and having late-night talks with students who didn't feel like they fit in at the boarding school."),l.a.createElement("li",{className:"bullet-point"},"Remembered every faculty and student's name in our school of 300 people."))))),l.a.createElement("br",null),l.a.createElement("div",{className:"acc-container"},l.a.createElement($.a,{expanded:this.state.panel4,style:{boxShadow:"none"},onChange:function(){return e.handleChange("panel4")}},l.a.createElement(ae.a,{style:{backgroundColor:"#80cbc4"},expandIcon:l.a.createElement(ne.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement("div",{className:"summary-container"},l.a.createElement("div",{className:"summary"},"Head Math Tutor",l.a.createElement("br",null),l.a.createElement("div",{className:"summary-time"},"Sep 2018 - May 2020")),l.a.createElement("div",{className:"summary-sub"},"Cate School"))),l.a.createElement(ee.a,{style:{backgroundColor:"#f0fafa"}},l.a.createElement("ul",{className:"project-des"},l.a.createElement("li",{className:"bullet-point"},"Tutored peers in math every Thursday night, coordinated with other math tutors, and organized meetings with math teachers."),l.a.createElement("li",{className:"bullet-point"},"Number of tutees who came for help doubled since I became math tutoring head."))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),re=(t(25),t(13)),ce=t.n(re),oe=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Lead Full-Stack Web Developer"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("div",{className:"tech"},"Javascript"),l.a.createElement("div",{className:"tech"},"React"),l.a.createElement("div",{className:"tech"},"React-Redux"),l.a.createElement("div",{className:"tech"},"Node.js"),l.a.createElement("div",{className:"tech"},"MongoDB")),l.a.createElement("div",{className:"project-tech"},l.a.createElement("div",{className:"git"},"Git Repos Not Open-Source Yet")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"Developed two modular and scalable React web apps that allow Brown's Malle lab researchers to study people's perception of fairness in criminal justice. One app is for researchers to customize experiments (with normal curves and bar graphs) and view participant data, the other is for people to participate in those experiments."),l.a.createElement("li",{className:"detail-bullet"},"Used MongoDB and built a versatile Node.js API that enables integration across the two apps and Qualtrics survey tool."),l.a.createElement("li",{className:"detail-bullet"},"Enabled randomizing experiments by adding a feature to let researchers easily import previously configured questions."),l.a.createElement("li",{className:"detail-bullet"},"Led the development team by 1. communicating with researchers to make sure the apps meet their needs 2. planning out weekly goals for the team 3. drawing app flow charts so that everyone stayed on the same page."))),l.a.createElement("div",{className:"project-videos"},l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,playbackRate:1.25,width:"100%",height:"100%",url:"https://youtu.be/0E-jN89yVkw"})),l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,playbackRate:1.25,width:"100%",height:"100%",url:"https://youtu.be/MZLObEiKFAA"})),l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,playbackRate:1.25,width:"100%",height:"100%",url:"https://youtu.be/H8CRcKy6M3s"})),l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,playbackRate:1.25,width:"100%",height:"100%",url:"https://youtu.be/m16aVBc-3io"})),l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,playbackRate:1.25,width:"100%",height:"100%",url:"https://youtu.be/EbhxrwxkDW4"})),l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,playbackRate:1.25,width:"100%",height:"100%",url:"https://youtu.be/GNeVzMznUe0"})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),se=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Internet of Things Consultant"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("div",{className:"tech"},"IoT"),l.a.createElement("div",{className:"tech"},"Research")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"Brainstormed, examined academic research papers, and analyzed corporation reports with IoT Consulting Group to co-edit an informative paper:",l.a.createElement("a",{style:{paddingLeft:"5px"},href:"https://seanzhan.com/docs/IoT_Research_Paper.pdf",target:"_blank"},"Research on Power Grid Enterprises\u2019 Development and Application of Data Mid-End Under Current Trends")),l.a.createElement("li",{className:"detail-bullet"},"Used SWOT analysis to explore the current state of Alibaba's Data Mid-End integration in China's power grid companies. Composed various flow charts to help readers understand the intricate structure of Data Mid-End's implementation."),l.a.createElement("li",{className:"detail-bullet"},"Explained various algorithms: Text Segmentation Algorithm, the Entropy-Weight Method for Quantity of Information, k-Nearest Neighbors Algorithm.")))))}}]),t}(n.Component),ie=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"openRepo",value:function(){window.open("https://github.com/seanzhan0319/SmartTello","_blank")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Autonomous Drone Flight"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("button",{className:"btn",onClick:function(){return e.openRepo()}},"Git Repo"),l.a.createElement("div",{className:"tech"},"Python"),l.a.createElement("div",{className:"tech"},"OpenCV"),l.a.createElement("div",{className:"tech"},"OpenPose")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"Programmed an open-source DJI Tello drone and incorporated a body-detection image-recognition algorithm (OpenPose) to achieve autonomous flight."),l.a.createElement("li",{className:"detail-bullet"},"The drone is able to track and follow a person based on body keypoints and respond to gestures to fly in all directions."))),l.a.createElement("div",{className:"project-videos"},l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,width:"100%",height:"100%",url:"https://youtu.be/J6YhY2urrgY"})),l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,width:"100%",height:"100%",url:"https://youtu.be/-71jIXdcTLw"})))))}}]),t}(n.Component),me=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Connect-4 Game"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("div",{className:"tech"},"Reason"),l.a.createElement("div",{className:"tech"},"OCaml"),l.a.createElement("div",{className:"tech"},"Javascript")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"Implemented the minimax algorithm and alpha-beta pruning. The game A.I. can play against human players and other A.I.'s."),l.a.createElement("li",{className:"detail-bullet"},"My algorithm beat 95% of other A.I.'s in the class."))),l.a.createElement("div",{className:"project-videos"},l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,width:"100%",height:"100%",playbackRate:1.25,url:"https://youtu.be/uK5Is0LzRKY"})))))}}]),t}(n.Component),Ae=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Search Algorithm"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("div",{className:"tech"},"Scala"),l.a.createElement("div",{className:"tech"},"Javascript")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"Programmed a search algorithm that presents most relevant Wikipedia pages given an input."),l.a.createElement("li",{className:"detail-bullet"},"The algorithm handles large-scale data and queries 50% faster than requirement for full credit."),l.a.createElement("li",{className:"detail-bullet"},"Implemented the PageRank algorithm."),l.a.createElement("li",{className:"detail-bullet"},"Learned to trade off between space and time efficiency; implemented multiple hashmaps that drastically decreased querying speed.")))))}}]),t}(n.Component),de=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"openRepo",value:function(){window.open("https://github.com/seanzhan0319/tictactoe","_blank")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Tic-Tac-Toe Game iOS App"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("button",{className:"btn",onClick:function(){return e.openRepo()}},"Git Repo"),l.a.createElement("div",{className:"tech"},"Swift")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"The game app allows two users to play against each other while keeping track of their scores."),l.a.createElement("li",{className:"detail-bullet"},"Developed the app in two hours as a speed coding challenge."))),l.a.createElement("div",{className:"project-videos"},l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,width:"100%",height:"100%",playbackRate:1.25,url:"https://youtu.be/xRlzn88GP0I"})))))}}]),t}(n.Component),he=function(e){Object(A.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"openRepo",value:function(){window.open("https://github.com/seanzhan0319/Reinforcement_Learning","_blank")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"home"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},"Reinforcement Learning Projects"),l.a.createElement("div",{className:"project-tech"},l.a.createElement("button",{className:"btn",onClick:function(){return e.openRepo()}},"Git Repo"),l.a.createElement("div",{className:"tech"},"Python"),l.a.createElement("div",{className:"tech"},"PyTorch")),l.a.createElement("div",{className:"project-details"},l.a.createElement("ul",null,l.a.createElement("li",{className:"detail-bullet"},"Implemented Deep Q Networks and wrote an agent to beat various games such as the Cart-Pole problem where a moving cart learns to balance a tall pole."),l.a.createElement("li",{className:"detail-bullet"},"The agent trades off between exploring the given environment or exploiting it. It's flexible and also learns to play atari games such as Pong."))),l.a.createElement("div",{className:"project-videos"},l.a.createElement("div",{className:"project-video"},l.a.createElement(ce.a,{controls:!0,width:"100%",height:"100%",playbackRate:1.25,url:"https://youtu.be/Ui0sMgrwODw"})))))}}]),t}(n.Component);var pe=function(){return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement("div",{className:"home"},l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:j}),l.a.createElement(s.a,{exact:!0,path:"/projects",component:z}),l.a.createElement(s.a,{exact:!0,path:"/experience",component:_}),l.a.createElement(s.a,{exact:!0,path:"/leadership",component:le}),l.a.createElement(s.a,{exact:!0,path:"/experience/malle",component:oe}),l.a.createElement(s.a,{exact:!0,path:"/experience/IoT",component:se}),l.a.createElement(s.a,{exact:!0,path:"/projects/drone",component:ie}),l.a.createElement(s.a,{exact:!0,path:"/projects/connect4",component:me}),l.a.createElement(s.a,{exact:!0,path:"/projects/search",component:Ae}),l.a.createElement(s.a,{exact:!0,path:"/projects/tictactoe",component:de}),l.a.createElement(s.a,{exact:!0,path:"/projects/relearn",component:he})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/fullStack.c6b0ef6b.png"},51:function(e,a,t){e.exports=t.p+"static/media/structure.a6f2b6eb.png"},57:function(e,a,t){},58:function(e,a,t){},65:function(e,a,t){e.exports=t.p+"static/media/proRec.ca961284.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/drone.44f1fd24.png"},67:function(e,a,t){e.exports=t.p+"static/media/connect4.da7c8e47.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/search.84ca2963.png"},69:function(e,a,t){e.exports=t.p+"static/media/tictactoe.2a6245b8.png"},70:function(e,a){e.exports="data:image/png;base64,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"},82:function(e,a,t){e.exports=t(116)},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},96:function(e,a,t){e.exports=t.p+"static/media/proCircle.f4d15b7a.png"},97:function(e,a,t){e.exports=t.p+"static/media/unify.08ac890d.png"},98:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.0ce5076a.chunk.js.map