(this["webpackJsonpabout-me"]=this["webpackJsonpabout-me"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),i=n(40),c=n.n(i),s=(n(174),n(175),n.p,n(176),n(6)),l=n(196),p=n(194),d=n(93),b=n(193),x=n(203),j=n(195),h=n(94),u=n(2),f=h.a.button(a||(a=Object(d.a)(["\n    background: none;\n    border: none;\n    cursor: pointer;\n\n"]))),g=function(e){var t=function(e){window.location.replace(e)};return Object(u.jsxs)(b.a,{justify:"space-between",background:"nav.background",py:2,w:"100%",px:20,boxShadow:"3px 3px 3px #ababab",position:"fixed",children:[Object(u.jsx)(p.a,{}),Object(u.jsxs)(x.a,{spacing:"30px",color:"#fff",children:[Object(u.jsx)(f,{onClick:function(){return t("/about-me/#home")},children:Object(u.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" Home "})}),Object(u.jsx)(f,{onClick:function(){return t("/about-me/#work")},children:Object(u.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" Work "})}),Object(u.jsx)(f,{onClick:function(){return t("/about-me/#about")},children:Object(u.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" About "})}),Object(u.jsx)(f,{onClick:function(){return t("/about-me/#contact")},children:Object(u.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" Contact "})})]})]})},m=n(204),O=n.p+"static/media/avatar.7226dedb.svg",w=function(e){e.size;return Object(u.jsx)(l.a,{textAlign:"start",w:"100%",pt:15,mt:"80px",children:Object(u.jsxs)(b.a,{justify:"space-between",w:["100%"],maxW:"1500px",px:4,children:[Object(u.jsx)(l.a,{h:"200px",children:Object(u.jsxs)(x.b,{textAlign:"start",px:5,children:[Object(u.jsx)(j.a,{fontSize:"48px",w:"100%",fontWeight:500,color:"nav.button",px:10,children:" Hi I'm Eric "}),Object(u.jsx)(j.a,{fontSize:["16px","16px","16px","22px"],px:0,children:" I like to design and build robots, mechanisms, electronics, and generally tinker with things. I employ rapid prototyping principles to my designs for quick and inexpensive iteration. I also dabble with data visualization, front end development, and UI design"})]})}),Object(u.jsx)(m.a,{src:O,alt:"Robot",boxSize:"180px"})]})})},y=function(e){var t=e.title,n=e.generate,a=e.data,r=e.color,i=e.margin;return Object(o.useEffect)((function(){var e=document.getElementById("d3-"+t);n({id:"d3-"+t,width:e.offsetWidth,height:e.offsetHeight,data:a,color:r,margin:i})}),[]),Object(u.jsx)(p.a,{id:"d3-"+t,h:"100%",w:"100%"})},v=n(61),k=v.b().domain([0,5]),S=[1,2,3,4,5],z=v.a().x((function(e){return e.x})).y((function(e){return e.y}));var I=function(e){(function(e){var t,n,a=e.margin?e.margin:{top:0,bottom:0,left:0,right:0},o=e.width-a.left-a.right,r=e.height-a.top-a.bottom,i=e.id,c=e.data;e.color;var s=function(){t=v.c("#"+i).append("svg").attr("height",r+a.top+a.bottom).attr("width",o+a.left+a.right).append("g").attr("transform","translate("+a.left+","+a.top+")"),n=t.append("g").attr("transform","translate("+o/2+","+r/2+")"),k.range([20,.4*Math.min(o,r)])},l=function(){c.forEach((function(e,t){e.radius=k(e.value),e.angle=Math.PI/2+2*Math.PI*t/c.length;var n=p(e.angle,e.value);e.x=n.x,e.y=n.y})),n.selectAll(".spider-lines").data(c,(function(e){return e.label})).enter().append("line").attr("class","spider-lines").attr("x1",(function(e){return p(e.angle,5.2).x})).attr("y1",(function(e){return p(e.angle,5.2).y})).attr("x2",0).attr("y2",0),n.selectAll(".circles").data(S).enter().append("circle").attr("class","spider-circles").attr("cx",0).attr("cy",0).attr("r",(function(e){return k(e)})),n.selectAll(".skill-path").data([c],(function(e){return e.label})).enter().append("path").attr("d",z).attr("class","spider-path"),n.append("line").attr("x1",c[0].x).attr("x2",c[c.length-1].x).attr("y1",c[0].y).attr("y2",c[c.length-1].y).attr("class","spider-path"),n.selectAll(".dots").data(c,(function(e){return e.label})).enter().append("circle").attr("class","spider-dots").attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})).attr("r",7),n.selectAll("text").data(c,(function(e){return e.label})).enter().append("text").attr("x",(function(e){return p(e.angle,5.8).x})).attr("y",(function(e){return p(e.angle,5.8).y})).attr("text-anchor",(function(e){return e.anchor})).text((function(e){return e.label})),n.append("circle").attr("r",40).attr("class","spider-middle"),n.append("text").attr("x",0).attr("y",0).attr("text-anchor","middle").attr("dominant-baseline","middle").text("My Skills")},p=function(e,t){return{x:Math.cos(e)*k(t),y:-Math.sin(e)*k(t)}};return function(){s(),l()}})(e)()},A=[{label:"Electrical Engineering",value:5,anchor:"middle"},{label:"Embedded Development",value:3,anchor:"end"},{label:"C++/Python",value:4,anchor:"end"},{label:"Data Visualization",value:4,anchor:"end"},{label:"Full Stack Development",value:1,anchor:"end"},{label:"ROS/Open CV",value:4,anchor:"start"},{label:"Mech. Engineering",value:3,anchor:"start"},{label:"Rapid Prototype",value:5,anchor:"start"},{label:"Precision Machining",value:3,anchor:"start"}],P=function(e){var t,n=e.size;return t=n.width<500?{top:20,bottom:20,right:20,left:20}:n.width<900?{top:20,bottom:20,right:40,left:40}:{top:0,bottom:0,right:90,left:90},Object(u.jsx)(l.a,{pt:0,w:"100%",children:Object(u.jsx)(p.a,{h:["500px","500px","500px","700px"],w:["100%"],maxW:["768px"],children:Object(u.jsx)(y,{title:"spider-chart",generate:I,data:A,color:"#49bede",margin:t})})})},R=n(197),C=n(201),E=n(198),W=n(199),F=n(97),D=n(74),_=function(e){var t=e.icon,n=e.title,a=e.toggle;e.location;return Object(u.jsx)(l.a,{w:"100%",h:"100%",border:"2px solid #3c97b0",boxShadow:"4px 4px 4px #ababab",borderRadius:"5px",onClick:function(){a(n)},cursor:"pointer",children:Object(u.jsxs)(x.b,{px:[5,10],h:"75%",children:[Object(u.jsx)(D.a,{as:t,color:"nav.button",boxSize:"60px"}),Object(u.jsxs)(j.a,{fontSize:["16px","20px"],fontWeight:700,color:"nav.button",children:[" ",n," "]})]})})},L=n(26),M=n.p+"static/media/link_rotate.55d33e65.jpg",B=n.p+"static/media/iot.2b68903c.jpg",N=n.p+"static/media/3d_print_1.9903e426.jpg",T=n.p+"static/media/3d_print_2.efe91535.jpg",U=n.p+"static/media/rpi_logo.2f6e7a97.png",V=n.p+"static/media/ArduinoCommunityLogo.0e2b0a69.png",J=n.p+"static/media/puffer_back.40240344.jpg",H=n.p+"static/media/puffer_front.d4fedc35.jpg",q=n.p+"static/media/heart_pcb.4f703aeb.png",G=n.p+"static/media/hearts.ae8d39b8.jpg",Y=n.p+"static/media/puffer_top.9330b46c.jpg",K=n.p+"static/media/viz_dark.1510c6af.png",Q=n.p+"static/media/viz_light.55ec3eef.png",X=n.p+"static/media/rover-silver.9cfc0883.png",Z=function(e){return Object(u.jsxs)(p.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(u.jsxs)(R.a,{columns:4,spacing:"20px",py:5,children:[Object(u.jsx)(C.a,{label:"Link artwork I made using a laser cutter and MDF",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:M,alt:"Laser Cut link"})})}),Object(u.jsx)(C.a,{label:"Prototype development for IoT sensor packages for monitoring inside cleanrooms at JPL",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:B,alt:"IoT Device development"})})}),Object(u.jsx)(C.a,{label:"3D printing pieces for robot swarm for JPL PUFFER project",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:N,alt:"print_1"})})}),Object(u.jsx)(C.a,{label:"3D printing pieces for robot swarm for JPL PUFFER project",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:T,alt:"print_2"})})})]}),Object(u.jsx)(j.a,{py:5,fontSize:"20px",px:5,children:"I've been using rapid prototype principles in my engineering design flow for a few years while working at JPL in an R&D robotics lab. This includes using items like 3D printers (FDM, SLS, SLA, metallic), laser cutter, vacuum form, and casting to create designs that are easily and quickly testable and iterable. I've been using these skills both towards robotic applications, as well as IoT sensor development platforms."}),Object(u.jsxs)(R.a,{columns:2,spacing:"20px",py:5,children:[Object(u.jsx)(l.a,{children:Object(u.jsx)(m.a,{src:U,alt:"Raspberry Pi",h:"120px"})}),Object(u.jsx)(m.a,{src:V,alt:"Arduino",h:"120px"})]}),Object(u.jsx)(j.a,{py:5,fontSize:"20px",px:5,children:"In development of rapid prototype robotic systems I leveraged devices such as Raspberry Pi, Arduino, BeagleBone, and other linux-based and micro-controller systems."})]})},$=function(e){return Object(u.jsxs)(p.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(u.jsxs)(R.a,{columns:2,spacing:"20px",py:5,children:[Object(u.jsx)(C.a,{label:"A few of the PUFFER robots",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:J,alt:"back"})})}),Object(u.jsx)(C.a,{label:"A few of the PUFFER robots",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:H,alt:"puffer_front"})})})]}),Object(u.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["My work in robotics has been spread between working as an Electrical Engineer, Software Developer, and to a smaller extent, Mechanical/Mechanism design. I focused a lot on making custom PCBs and electronics systems, and writing embedded code to run on micro controllers, and writing ROS code to do motor control/communication to micro controllers. One major project I worked on, the Pop-Up Flat Folding Explorer Robot (PUFFER) can be seen more in depth on the",Object(u.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://www.nasa.gov/directorates/spacetech/game_changing_development/projects/A-PUFFER",children:" NASA PUFFER article "})]})]})},ee=function(e){return Object(u.jsxs)(p.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(u.jsxs)(R.a,{columns:3,spacing:"20px",py:5,children:[Object(u.jsx)(C.a,{label:"PCB Layout for hear PCB project for a valentines day project",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:q,alt:"heart_pcb"})})}),Object(u.jsx)(C.a,{label:"Heart PCBs manufactured",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:G,alt:"hearts"})})}),Object(u.jsx)(C.a,{label:"Top-view of Electronics for PUFFER. A combination of COTS pieces and custom electroncis/PCBs",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:Y,alt:"puffer_top"})})})]}),Object(u.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["My experience in electronics is geared mostly towards development of custom PCBs and electronics for small-scale robotic systems. This usually also involved integrating in with existing COTS parts, such as motor controllers, micro controllerss, solar charers, and batteries. An open-source PCB design I made can be found here: ",Object(u.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://github.com/ericjunkins/heart-pcb",children:"Heart PCB Project "})]})]})},te=function(e){return Object(u.jsxs)(p.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(u.jsxs)(R.a,{columns:2,spacing:"20px",py:5,children:[Object(u.jsx)(C.a,{label:"COVID-19 Data visualization dashboard",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:K,alt:"viz_dark"})})}),Object(u.jsx)(C.a,{label:"Light-theme of COVID-19 Viz",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:Q,alt:"viz_light"})})})]}),Object(u.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["At the beginning of the COVID-19 Pandemic I was no longer able to work from the lab anymore, so started doing work with data visualization, one major task was to build visualization of COVID-19. This work was all done using",Object(u.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://d3js.org/",children:" D3 "})," and ",Object(u.jsx)(W.a,{fontWeight:500,color:"nav.button",href:"https://reactjs.org/",children:" React "})," to build the frontend UI."]})]})},ne=function(e){return Object(u.jsxs)(p.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(u.jsxs)(R.a,{columns:5,spacing:"20px",py:5,children:[Object(u.jsx)(m.a,{}),Object(u.jsx)(m.a,{}),Object(u.jsx)(C.a,{label:"JPL Open Source Rover Educational Robot",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(u.jsx)(E.a,{bg:"none",children:Object(u.jsx)(m.a,{src:X,alt:"viz_dark"})})})]}),Object(u.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["While starting at JPL I designed an",Object(u.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://github.com/nasa-jpl/open-source-rover",children:" Open-Source Robotics project "}),", a DIY version of the 6-wheel mars rover designs, out of completely off-the-shelf parts. This project was aimed at high school robotic clubs as a teaching platform of mant different aspects of robotics. I am still one of the core maintainers of this project."]})]})},ae=function(e){var t,n=Object(o.useState)(void 0),a=Object(s.a)(n,2),r=a[0],i=a[1];"3D Printing & Rapid Prototype"===r?t=Object(u.jsx)(Z,{}):"Robotics"===r?t=Object(u.jsx)($,{}):"Electronics"===r?t=Object(u.jsx)(ee,{}):"Data Visualization"===r?t=Object(u.jsx)(te,{}):"Open Source Development"===r?t=Object(u.jsx)(ne,{}):void 0===r&&(t=null);var c=function(e){i(e===r?void 0:e)};return Object(u.jsxs)(p.a,{children:[Object(u.jsx)(l.a,{w:"100%",children:Object(u.jsxs)(p.a,{w:"90%",maxW:"1500px",id:"work",children:[Object(u.jsxs)(p.a,{textAlign:"start",px:5,py:5,children:[Object(u.jsx)(j.a,{fontWeight:400,fontSize:"26px",color:"nav.button",children:" A Little bit about my work "}),Object(u.jsx)(j.a,{px:5,fontSize:"20px",children:"Click on a card to see some examples of my work in each section."})]}),Object(u.jsxs)(F.a,{templateColumns:["repeat(4, 1fr)","repeat(4, 1fr)","repeat(6, 1fr)","repeat(5, 1fr)"],templateRows:["repeat(3, 1fr)","repeat(3, 1fr)","repeat(2, 1fr)","repeat(1, 1fr)"],h:["550px","500px","400px","200px"],columnGap:5,rowGap:5,children:[Object(u.jsx)(F.b,{colSpan:[2,2,2,1],rowSpan:1,children:Object(u.jsx)(_,{icon:L.c,title:"3D Printing & Rapid Prototype",toggle:c})}),Object(u.jsx)(F.b,{colSpan:[2,2,2,1],rowSpan:1,children:Object(u.jsx)(_,{icon:L.g,title:"Robotics",toggle:c})}),Object(u.jsx)(F.b,{colSpan:[2,2,2,1],rowSpan:1,children:Object(u.jsx)(_,{icon:L.f,title:"Electronics",toggle:c})}),Object(u.jsx)(F.b,{colSpan:[2,2,2,1],rowSpan:1,colStart:[3,3,2,4],children:Object(u.jsx)(_,{icon:L.a,title:"Data Visualization",toggle:c})}),Object(u.jsx)(F.b,{colSpan:[2,2,2,1],rowSpan:1,colStart:[2,"none",4,5],children:Object(u.jsx)(_,{icon:L.b,title:"Open Source Development",toggle:c})})]})]})}),Object(u.jsx)(l.a,{w:"100%",children:t})]})},oe=function(e){return Object(u.jsx)(l.a,{w:"100%",py:10,id:"about",children:Object(u.jsxs)(p.a,{w:"80%",maxW:"1500px",textAlign:"start",px:5,children:[Object(u.jsx)(j.a,{fontWeight:400,fontSize:"26px",color:"nav.button",children:" A Little bit about me "}),Object(u.jsx)(j.a,{px:5,py:2,fontSize:"20px",children:"In college I studied Physics, but afterwards I realized what I really wanted to do was build and design things. After graduating I've held positions as an Instrumentation Design Engineer, Integration/Test Engineer, and Robotics Engineer. Through these I've gained a diverse skillset, getting to work on all sorts of things from Rockets, Flight hardware, to designing mechanisms and robotic prototypes that for future exploration on other planets."}),Object(u.jsx)(j.a,{px:5,py:2,fontSize:"20px",children:"I'm fairly self-taught in my aspects of my day-to-day job, I think that one of my greatest skills is the ability to teach myself to do anything, from embedded development, mechanical design, to data visualization and web development. I enjoy the opportunity to experience engineering projects/challenges from all fields, and believe it has made me a better engineer in all aspects from it."}),Object(u.jsx)(j.a,{px:5,py:0,fontSize:"20px",children:"For my free time I'm obsessed with rock climbing and playing sand volleyball, most days I can be found doing one of those two activities. I enjoy building and creating things, whether it's 3D printing, tinkering with electronics, in a machine shop, or in the kitchen. I've lived in Colorado most of my life, with a few years in Los Angeles as well."})]})})},re=n(7),ie=function(e){var t;return Object(u.jsx)(l.a,{w:"100%",py:10,id:"contact",children:Object(u.jsxs)(p.a,(t={w:"80%",maxW:"1500px",textAlign:"start",px:5},Object(re.a)(t,"textAlign","center"),Object(re.a)(t,"children",[Object(u.jsx)(j.a,{fontSize:"34px",fontWeight:500,color:"nav.button",children:" Find Me "}),Object(u.jsx)(l.a,{py:10,children:Object(u.jsxs)(x.a,{spacing:"10px",children:[Object(u.jsx)(W.a,{href:"https://www.linkedin.com/in/eric-junkins-3b9745209",target:"_blank",children:Object(u.jsx)(D.a,{boxSize:"60px",as:L.e,color:"nav.button"})}),Object(u.jsx)(W.a,{href:"https://www.facebook.com/eric.junkins/",target:"_blank",children:Object(u.jsx)(D.a,{boxSize:"60px",as:L.d,color:"nav.button"})})]})}),Object(u.jsxs)(j.a,{children:[" ",Object(u.jsx)(W.a,{href:"mailto:eric.junkins@colorado.edu",target:"_blank",fontSize:"24px",color:"nav.button",fontWeight:500,children:" eric.junkins@colorado.edu "})]})]),t))})},ce=function(e){var t=function(){var e=Object(o.useState)({width:void 0,height:void 0}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(u.jsx)(l.a,{w:"100vw",bg:"site.background",fontFamily:'"Roboto", "Avenir", "Segoe UI", sans-serif;',id:"home",children:Object(u.jsxs)(p.a,{w:"100%",bg:"site.background",children:[Object(u.jsx)(g,{size:t}),Object(u.jsx)(w,{size:t}),Object(u.jsx)(P,{size:t}),Object(u.jsx)(ae,{size:t}),Object(u.jsx)(oe,{size:t}),Object(u.jsx)(l.a,{w:"100%",children:Object(u.jsx)(p.a,{borderBottom:"1px solid #000",w:"80%",maxW:"1500px"})}),Object(u.jsx)(ie,{})]})})};var se=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(ce,{})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},pe=n(200),de=Object(pe.a)({colors:{nav:{background:"#42aac7",button:"#3994ad",boxShadow:"10px 5px 5px red"},site:{background:"#e9eef0"}}}),be=n(202);c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(be.a,{theme:de,children:Object(u.jsx)(se,{})})}),document.getElementById("root")),le()}},[[183,1,2]]]);
//# sourceMappingURL=main.a7b56c4a.chunk.js.map