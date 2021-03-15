(this["webpackJsonpabout-me"]=this["webpackJsonpabout-me"]||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),r=n(40),c=n.n(r),s=(n(172),n(173),n.p,n(174),n(195)),l=n(193),d=n(92),p=n(192),b=n(201),j=n(194),x=n(93),h=n(2),u=x.a.button(a||(a=Object(d.a)(["\n    background: none;\n    border: none;\n    cursor: pointer;\n\n"]))),g=function(e){var t=function(e){window.location.replace(e)};return Object(h.jsxs)(p.a,{justify:"space-between",background:"nav.background",py:2,w:"100%",px:20,boxShadow:"3px 3px 3px #ababab",position:"fixed",children:[Object(h.jsx)(l.a,{}),Object(h.jsxs)(b.a,{spacing:"30px",color:"#fff",children:[Object(h.jsx)(u,{onClick:function(){return t("/about-me/#home")},children:Object(h.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" Home "})}),Object(h.jsx)(u,{onClick:function(){return t("/#work")},children:Object(h.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" Work "})}),Object(h.jsx)(u,{onClick:function(){return t("/#about")},children:Object(h.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" About "})}),Object(h.jsx)(u,{onClick:function(){return t("/#contact")},children:Object(h.jsx)(j.a,{fontSize:"20px",fontWeight:500,children:" Contact "})})]})]})},m=n(202),f=n.p+"static/media/avatar.7226dedb.svg",O=function(e){return Object(h.jsx)(s.a,{textAlign:"start",w:"100%",pt:15,mt:10,children:Object(h.jsxs)(p.a,{justify:"space-between",w:"80%",maxW:"1500px",px:4,children:[Object(h.jsx)(s.a,{h:"200px",children:Object(h.jsxs)(b.b,{textAlign:"start",px:5,children:[Object(h.jsx)(j.a,{fontSize:"48px",w:"100%",fontWeight:500,color:"nav.button",px:10,children:" Hi I'm Eric "}),Object(h.jsx)(j.a,{fontSize:"20px",px:0,children:" I like to design and build robots, mechanisms, electronics, and generally tinker with things. I employ rapid prototyping principles to my designs for quick and inexpensive iteration. I also dabble with data visualization, front end development, and UI design"})]})}),Object(h.jsx)(m.a,{src:f,alt:"Robot",boxSize:"180px"})]})})},w=function(e){var t=e.title,n=e.generate,a=e.data,i=e.color;return Object(o.useEffect)((function(){var e=document.getElementById("d3-"+t);n({id:"d3-"+t,width:e.offsetWidth,height:e.offsetHeight,data:a,color:i})}),[]),Object(h.jsx)(l.a,{id:"d3-"+t,h:"100%",w:"100%"})},y=n(61),v=y.b().domain([0,5]),k=[1,2,3,4,5],S=y.a().x((function(e){return e.x})).y((function(e){return e.y}));var I=function(e){(function(e){var t,n,a=e.width,o=e.height,i=e.id,r=e.data,c=(e.color,e.margin?e.margin:{top:0,bottom:0,left:0,right:0}),s=function(){t=y.c("#"+i).append("svg").attr("height",o).attr("width",a).append("g").attr("transform","translate("+c.left+","+c.top+")"),n=t.append("g").attr("transform","translate("+a/2+","+o/2+")"),v.range([20,.4*Math.min(a,o)])},l=function(){r.forEach((function(e,t){e.radius=v(e.value),e.angle=Math.PI/2+2*Math.PI*t/r.length;var n=d(e.angle,e.value);e.x=n.x,e.y=n.y})),n.selectAll(".spider-lines").data(r,(function(e){return e.label})).enter().append("line").attr("class","spider-lines").attr("x1",(function(e){return d(e.angle,5.2).x})).attr("y1",(function(e){return d(e.angle,5.2).y})).attr("x2",0).attr("y2",0),n.selectAll(".circles").data(k).enter().append("circle").attr("class","spider-circles").attr("cx",0).attr("cy",0).attr("r",(function(e){return v(e)})),n.selectAll(".skill-path").data([r],(function(e){return e.label})).enter().append("path").attr("d",S).attr("class","spider-path"),n.append("line").attr("x1",r[0].x).attr("x2",r[r.length-1].x).attr("y1",r[0].y).attr("y2",r[r.length-1].y).attr("class","spider-path"),n.selectAll(".dots").data(r,(function(e){return e.label})).enter().append("circle").attr("class","spider-dots").attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})).attr("r",7),n.selectAll("text").data(r,(function(e){return e.label})).enter().append("text").attr("x",(function(e){return d(e.angle,5.8).x})).attr("y",(function(e){return d(e.angle,5.8).y})).attr("text-anchor",(function(e){return e.anchor})).text((function(e){return e.label})),n.append("circle").attr("r",40).attr("class","spider-middle"),n.append("text").attr("x",0).attr("y",0).attr("text-anchor","middle").attr("dominant-baseline","middle").text("My Skills")},d=function(e,t){return{x:Math.cos(e)*v(t),y:-Math.sin(e)*v(t)}};return function(){s(),l()}})(e)()},A=[{label:"Electrical Engineering",value:5,anchor:"middle"},{label:"Embedded Development",value:3,anchor:"end"},{label:"C++/Python",value:4,anchor:"end"},{label:"Data Visualization",value:4,anchor:"end"},{label:"Full Stack Development",value:1,anchor:"end"},{label:"ROS/Open CV",value:4,anchor:"start"},{label:"Mechanical Engineering",value:3,anchor:"start"},{label:"Rapid Prototyping",value:5,anchor:"start"},{label:"Precision Machining",value:3,anchor:"start"}],z=function(e){return Object(h.jsx)(s.a,{pt:0,w:"100%",children:Object(h.jsx)(b.b,{w:"100%",h:"100%",children:Object(h.jsx)(l.a,{h:"700px",w:"80%",maxW:"900px",children:Object(h.jsx)(w,{title:"spider-chart",generate:I,data:A,color:"#49bede",margin:{top:0,bottom:0,left:20,right:20}})})})})},P=n(6),R=n(203),C=n(199),F=n(196),W=n(197),D=n(73),E=function(e){var t=e.icon,n=e.title,a=e.toggle;e.location;return Object(h.jsx)(s.a,{w:"100%",h:"100%",border:"2px solid #3c97b0",boxShadow:"4px 4px 4px #ababab",borderRadius:"5px",onClick:function(){a(n)},cursor:"pointer",children:Object(h.jsxs)(b.b,{px:10,h:"75%",children:[Object(h.jsx)(D.a,{as:t,color:"nav.button",boxSize:"60px"}),Object(h.jsxs)(j.a,{fontSize:"20px",fontWeight:700,color:"nav.button",children:[" ",n," "]})]})})},_=n(26),L=n.p+"static/media/link_rotate.55d33e65.jpg",M=n.p+"static/media/iot.2b68903c.jpg",B=n.p+"static/media/3d_print_1.9903e426.jpg",N=n.p+"static/media/3d_print_2.efe91535.jpg",T=n.p+"static/media/rpi_logo.2f6e7a97.png",U=n.p+"static/media/ArduinoCommunityLogo.0e2b0a69.png",V=n.p+"static/media/puffer_back.40240344.jpg",J=n.p+"static/media/puffer_front.d4fedc35.jpg",H=n.p+"static/media/heart_pcb.4f703aeb.png",q=n.p+"static/media/hearts.ae8d39b8.jpg",Y=n.p+"static/media/puffer_top.9330b46c.jpg",G=n.p+"static/media/viz_dark.1510c6af.png",K=n.p+"static/media/viz_light.55ec3eef.png",Q=n.p+"static/media/rover-silver.9cfc0883.png",X=function(e){return Object(h.jsxs)(l.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(h.jsxs)(R.a,{columns:4,spacing:"20px",py:5,children:[Object(h.jsx)(C.a,{label:"Link artwork I made using a laser cutter and MDF",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:L,alt:"Laser Cut link"})})}),Object(h.jsx)(C.a,{label:"Prototype development for IoT sensor packages for monitoring inside cleanrooms at JPL",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:M,alt:"IoT Device development"})})}),Object(h.jsx)(C.a,{label:"3D printing pieces for robot swarm for JPL PUFFER project",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:B,alt:"print_1"})})}),Object(h.jsx)(C.a,{label:"3D printing pieces for robot swarm for JPL PUFFER project",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:N,alt:"print_2"})})})]}),Object(h.jsx)(j.a,{py:5,fontSize:"20px",px:5,children:"I've been using rapid prototype principles in my engineering design flow for a few years while working at JPL in an R&D robotics lab. This includes using items like 3D printers (FDM, SLS, SLA, metallic), laser cutter, vacuum form, and casting to create designs that are easily and quickly testable and iterable. I've been using these skills both towards robotic applications, as well as IoT sensor development platforms."}),Object(h.jsxs)(R.a,{columns:2,spacing:"20px",py:5,children:[Object(h.jsx)(s.a,{children:Object(h.jsx)(m.a,{src:T,alt:"Raspberry Pi"})}),Object(h.jsx)(m.a,{src:U,alt:"Arduino"})]}),Object(h.jsx)(j.a,{py:5,fontSize:"20px",px:5,children:"In development of rapid prototype robotic systems I leveraged devices such as Raspberry Pi, Arduino, BeagleBone, and other linux-based and micro-controller systems."})]})},Z=function(e){return Object(h.jsxs)(l.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(h.jsxs)(R.a,{columns:2,spacing:"20px",py:5,children:[Object(h.jsx)(C.a,{label:"A few of the PUFFER robots",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:V,alt:"back"})})}),Object(h.jsx)(C.a,{label:"A few of the PUFFER robots",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:J,alt:"puffer_front"})})})]}),Object(h.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["My work in robotics has been spread between working as an Electrical Engineer, Software Developer, and to a smaller extent, Mechanical/Mechanism design. I focused a lot on making custom PCBs and electronics systems, and writing embedded code to run on micro controllers, and writing ROS code to do motor control/communication to micro controllers. One major project I worked on, the Pop-Up Flat Folding Explorer Robot (PUFFER) can be seen more in depth on the",Object(h.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://www.nasa.gov/directorates/spacetech/game_changing_development/projects/A-PUFFER",children:" NASA PUFFER article "})]})]})},$=function(e){return Object(h.jsxs)(l.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(h.jsxs)(R.a,{columns:3,spacing:"20px",py:5,children:[Object(h.jsx)(C.a,{label:"PCB Layout for hear PCB project for a valentines day project",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:H,alt:"heart_pcb"})})}),Object(h.jsx)(C.a,{label:"Heart PCBs manufactured",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:q,alt:"hearts"})})}),Object(h.jsx)(C.a,{label:"Top-view of Electronics for PUFFER. A combination of COTS pieces and custom electroncis/PCBs",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:Y,alt:"puffer_top"})})})]}),Object(h.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["My experience in electronics is geared mostly towards development of custom PCBs and electronics for small-scale robotic systems. This usually also involved integrating in with existing COTS parts, such as motor controllers, micro controllerss, solar charers, and batteries. An open-source PCB design I made can be found here: ",Object(h.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://github.com/ericjunkins/heart-pcb",children:"Heart PCB Project "})]})]})},ee=function(e){return Object(h.jsxs)(l.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(h.jsxs)(R.a,{columns:2,spacing:"20px",py:5,children:[Object(h.jsx)(C.a,{label:"COVID-19 Data visualization dashboard",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:G,alt:"viz_dark"})})}),Object(h.jsx)(C.a,{label:"Light-theme of COVID-19 Viz",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:K,alt:"viz_light"})})})]}),Object(h.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["At the beginning of the COVID-19 Pandemic I was no longer able to work from the lab anymore, so started doing work with data visualization, one major task was to build visualization of COVID-19. This work was all done using",Object(h.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://d3js.org/",children:" D3 "})," and ",Object(h.jsx)(W.a,{fontWeight:500,color:"nav.button",href:"https://reactjs.org/",children:" React "})," to build the frontend UI."]})]})},te=function(e){return Object(h.jsxs)(l.a,{mt:5,p:5,border:"2px solid #3c97b0",borderRadius:"5px",w:"80%",maxW:"1500px",boxShadow:"4px 4px 4px #ababab",children:[Object(h.jsxs)(R.a,{columns:5,spacing:"20px",py:5,children:[Object(h.jsx)(m.a,{}),Object(h.jsx)(m.a,{}),Object(h.jsx)(C.a,{label:"JPL Open Source Rover Educational Robot",placement:"bottom",hasArrow:!0,className:"tooltips",py:5,px:5,children:Object(h.jsx)(F.a,{bg:"none",children:Object(h.jsx)(m.a,{src:Q,alt:"viz_dark"})})})]}),Object(h.jsxs)(j.a,{py:5,fontSize:"20px",px:5,children:["While starting at JPL I designed an",Object(h.jsx)(W.a,{color:"nav.button",fontWeight:500,href:"https://github.com/nasa-jpl/open-source-rover",children:" Open-Source Robotics project "}),", a DIY version of the 6-wheel mars rover designs, out of completely off-the-shelf parts. This project was aimed at high school robotic clubs as a teaching platform of mant different aspects of robotics. I am still one of the core maintainers of this project."]})]})},ne=function(e){var t,n=Object(o.useState)(void 0),a=Object(P.a)(n,2),i=a[0],r=a[1];"3D Printing & Rapid Prototype"===i?t=Object(h.jsx)(X,{}):"Robotics"===i?t=Object(h.jsx)(Z,{}):"Electronics"===i?t=Object(h.jsx)($,{}):"Data Visualization"===i?t=Object(h.jsx)(ee,{}):"Open Source Development"===i?t=Object(h.jsx)(te,{}):void 0===i&&(t=null);var c=function(e){r(e===i?void 0:e)};return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(s.a,{w:"100%",children:Object(h.jsxs)(l.a,{w:"90%",maxW:"1500px",id:"work",children:[Object(h.jsxs)(l.a,{textAlign:"start",px:5,py:5,children:[Object(h.jsx)(j.a,{fontWeight:400,fontSize:"26px",color:"nav.button",children:" A Little bit about my work "}),Object(h.jsx)(j.a,{px:5,fontSize:"20px",children:"Click on a card to see some examples of my work in each section."})]}),Object(h.jsxs)(R.a,{columns:5,h:"200px",spacing:5,children:[Object(h.jsx)(E,{icon:_.c,title:"3D Printing & Rapid Prototype",toggle:c}),Object(h.jsx)(E,{icon:_.g,title:"Robotics",toggle:c}),Object(h.jsx)(E,{icon:_.f,title:"Electronics",toggle:c}),Object(h.jsx)(E,{icon:_.a,title:"Data Visualization",toggle:c}),Object(h.jsx)(E,{icon:_.b,title:"Open Source Development",toggle:c})]})]})}),Object(h.jsx)(s.a,{w:"100%",children:t})]})},ae=function(e){return Object(h.jsx)(s.a,{w:"100%",py:10,id:"about",children:Object(h.jsxs)(l.a,{w:"80%",maxW:"1500px",textAlign:"start",px:5,children:[Object(h.jsx)(j.a,{fontWeight:400,fontSize:"26px",color:"nav.button",children:" A Little bit about me "}),Object(h.jsx)(j.a,{px:5,py:2,fontSize:"20px",children:"In college I studied Physics, but afterwards I realized what I really wanted to do was build and design things. After graduating I've held positions as an Instrumentation Design Engineer, Integration/Test Engineer, and Robotics Engineer. Through these I've gained a diverse skillset, getting to work on all sorts of things from Rockets, Flight hardware, to designing mechanisms and robotic prototypes that for future exploration on other planets."}),Object(h.jsx)(j.a,{px:5,py:2,fontSize:"20px",children:"I'm fairly self-taught in my aspects of my day-to-day job, I think that one of my greatest skills is the ability to teach myself to do anything, from embedded development, mechanical design, to data visualization and web development. I enjoy the opportunity to experience engineering projects/challenges from all fields, and believe it has made me a better engineer in all aspects from it."}),Object(h.jsx)(j.a,{px:5,py:0,fontSize:"20px",children:"For my free time I'm obsessed with rock climbing and playing sand volleyball, most days I can be found doing one of those two activities. I enjoy building and creating things, whether it's 3D printing, tinkering with electronics, in a machine shop, or in the kitchen. I've lived in Colorado most of my life, with a few years in Los Angeles as well."})]})})},oe=n(7),ie=function(e){var t;return Object(h.jsx)(s.a,{w:"100%",py:10,id:"contact",children:Object(h.jsxs)(l.a,(t={w:"80%",maxW:"1500px",textAlign:"start",px:5},Object(oe.a)(t,"textAlign","center"),Object(oe.a)(t,"children",[Object(h.jsx)(j.a,{fontSize:"34px",fontWeight:500,color:"nav.button",children:" Find Me "}),Object(h.jsx)(s.a,{py:10,children:Object(h.jsxs)(b.a,{spacing:"10px",children:[Object(h.jsx)(W.a,{href:"https://www.linkedin.com/in/eric-junkins-3b9745209",target:"_blank",children:Object(h.jsx)(D.a,{boxSize:"60px",as:_.e,color:"nav.button"})}),Object(h.jsx)(W.a,{href:"https://www.facebook.com/eric.junkins/",target:"_blank",children:Object(h.jsx)(D.a,{boxSize:"60px",as:_.d,color:"nav.button"})})]})}),Object(h.jsxs)(j.a,{children:[" ",Object(h.jsx)(W.a,{href:"mailto:eric.junkins@colorado.edu",target:"_blank",fontSize:"24px",color:"nav.button",fontWeight:500,children:" eric.junkins@colorado.edu "})]})]),t))})},re=function(e){return Object(h.jsx)(s.a,{w:"100vw",bg:"site.background",fontFamily:'"Roboto", "Avenir", "Segoe UI", sans-serif;',id:"home",children:Object(h.jsxs)(l.a,{w:"100%",bg:"site.background",children:[Object(h.jsx)(g,{}),Object(h.jsx)(O,{}),Object(h.jsx)(z,{}),Object(h.jsx)(ne,{}),Object(h.jsx)(ae,{}),Object(h.jsx)(s.a,{w:"100%",children:Object(h.jsx)(l.a,{borderBottom:"1px solid #000",w:"80%",maxW:"1500px"})}),Object(h.jsx)(ie,{})]})})};var ce=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(re,{})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))},le=n(198),de=Object(le.a)({colors:{nav:{background:"#42aac7",button:"#3994ad",boxShadow:"10px 5px 5px red"},site:{background:"#e9eef0"}}}),pe=n(200);c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(pe.a,{theme:de,children:Object(h.jsx)(ce,{})})}),document.getElementById("root")),se()}},[[181,1,2]]]);
//# sourceMappingURL=main.0854e9e4.chunk.js.map