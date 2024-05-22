(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{122:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),n=a(43),o=a.n(n),l=a(40),c=a(39);const s=e=>i.a.createElement(l.a,null,i.a.createElement("title",{itemProp:"name",lang:"en"},e.title," | CovidTracker"),i.a.createElement("meta",{name:"description",content:"Covid Information page and Dashboard to track the spread of Coronavirus."}),i.a.createElement("meta",{name:"keywords",content:"coronavirus,corona,covid,covid19,covid-19,covid india,india,virus,world"}));var d=a(5),m=a(2),h=a.p+"static/media/svg-1.77174618.svg",p=a.p+"static/media/svg-2.e78c9ec7.svg",u=a.p+"static/media/img-5.e6d7fa25.png",f=a.p+"static/media/svg-5.c0526e5c.svg",g=a(135);var v=[{id:Object(g.a)(),to:"overview",title:"Overview"},{id:Object(g.a)(),to:"about",title:"About"},{id:Object(g.a)(),to:"symptoms",title:"Symptoms"},{id:Object(g.a)(),to:"guidelines",title:"Guidelines"},{id:Object(g.a)(),to:"vaccination",title:"Vaccination"},{id:Object(g.a)(),to:"faq",title:"FAQs"}];const b={id:v[1].to,lightBg:!1,lightText:!0,lightTextDesc:!0,btnLink:"https://www.who.int/health-topics/coronavirus#tab=tab_1",topLine:"What is covid-19 ?",headline:"COVID-19 is a disease caused by the SARS-CoV-2 virus.",description:"Early discovered in the 1960s, the name of this virus comes from the crown-like spikes that it has its surface. The word corona came from the Latin word \u201cCrown.\u201d Coronaviruses are a large group of viruses that infect animals and mammals like bats, pigs. Scientists call them zoonotic because they get a transfer from animals to humans.",buttonLabel:"Read More",imgStart:!1,img:h,alt:v[0].to,primary:!0,darkText:!1},y={id:v[2].to,lightBg:!0,lightText:!1,lightTextDesc:!1,btnLink:"https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html",topLine:"What are the symptoms ?",headline:"COVID-19 affects different people in different ways.",description:"Most common symptoms are fever, cough, tiredness, loss of taste or smell. Less common symptoms are sore throat, headache, aches and pains, diarrhoea, a rash on skin, or discolouration of fingers or toes, red or irritated eyes. Serious symptoms are difficulty breathing or shortness of breath loss of speech or mobility, or confusion chest pain.Seek immediate medical attention if you have serious symptoms.",buttonLabel:"Read More",imgStart:!0,img:f,alt:v[1].to,primary:!0,darkText:!0},w={id:v[3].to,lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"What are the Guidelines ?",btnLink:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",headline:"Stay aware of the latest COVID-19 information.",description:"Keep yourself and others safe.Get vaccinated as soon as it\u2019s your turn and follow local guidance on vaccination. Keep physical distance of at least 1 metre from others. Clean your hands frequently with alcohol-based hand rub or soap and water.If you develop symptoms or test positive for COVID-19, self-isolate until you recover.Avoid the 3Cs: spaces that are closed, crowded or involve close contact. Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings.",buttonLabel:"Read More",imgStart:!1,img:p,alt:v[2].to,primary:!0,darkText:!1},x={id:v[4].to,lightBg:!0,lightText:!1,lightTextDesc:!1,btnLink:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines/advice",topLine:"Getting Vaccinated",headline:"There are several safe and effective vaccines to prevent COVID-19.",description:"The COVID-19 vaccines are safe for most people 18 years and older, including those with pre-existing conditions of any kind, including auto-immune disorders. These conditions include: hypertension, diabetes, asthma, pulmonary, liver and kidney disease, as well as chronic infections that are stable and controlled. Check when you should come in for a second dose \u2013 if needed. Most of the vaccines available are two-dose vaccines. Second doses help boost the immune response and strengthen immunity.In most cases, minor side effects are normal.",buttonLabel:"Read More",imgStart:!0,img:u,alt:v[3].to,primary:!0,darkText:!0};var E=a.p+"static/media/video.4a97cf76.mp4";const k=m.c`
  background: linear-gradient(90deg, #002fff, var(--color-primary));
`,O=Object(m.d)((e=>{let{component:t,...a}=e;return i.a.cloneElement(t,a)}))`
  // border-radius: 50px;
  background: ${e=>{let{$primary:t}=e;return t?"var(--color-primary)":"var(--color-secondary-light)"}};
  white-space: nowrap;
  padding: ${e=>{let{$big:t}=e;return t?"1.3rem 2.8rem":"1rem 2rem"}};
  color: ${e=>{let{$primary:t}=e;return t?"var(--color-secondary-light)":"var(--color-primary)"}};
  font-size: ${e=>{let{$fontBig:t}=e;return t?"2rem":"1.5rem"}};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  box-shadow: 8px 8px 0px ${e=>{let{$shadow:t}=e;return t||"#000"}};

  &:hover,
  &:focus {
    color: ${e=>{let{$primary:t}=e;return t?"var(--color-primary)":"var(--color-secondary-light)"}};
    box-shadow: inset 0px 0px 0px 1px
      ${e=>{let{$primary:t}=e;return t?"var(--color-primary)":"var(--color-secondary-light)"}};
    transition: all 0.2s ease-in-out;
    background: ${e=>{let{$primary:t}=e;return t?"var(--color-secondary-light)":"var(--color-primary)"}};
    transform: translate(0px, 8px);
  }

  ${e=>{let{$rainbow:t}=e;return t&&k}}
`;var $=a(53),j=a(65);const C=m.d.div`
  background: var(--color-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  height: calc(100vh + 80px);
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* add dark overlay */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 2;
  }
  @media screen and (max-width: ${e=>e.theme.bpSmall}) {
    padding: 0;
  }
`,z=m.d.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,L=m.d.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  /* main property to spread the video to fit the available space */
  object-fit: cover;
  background: var(--color-dark);
`,I=m.d.div`
  z-index: 3; // important (must be on top of video and overlay)
  max-width: 120rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20rem;
  height: 70vh;
  justify-content: space-evenly;
  @media screen and (max-width: ${e=>e.theme.bpSmall}) {
    padding: 0;
    max-width: 100%;
    justify-content: center;
  }
`,S=(m.d.p`
  margin-top: 2.4rem;
  font-size: 2.4rem;
  text-align: center;
  max-width: 60rem;
  color: var(--color-secondary);

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${e=>e.theme.bpSmall}) {
    font-size: 1.8rem;
  }
`,m.d.div`
  /* margin-top: 10em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`),T=Object(m.d)(j.a)`
  margin-left: 0.8rem;
  font-size: 2rem;
`,D=Object(m.d)(j.b)`
  margin-left: 0.8rem;
  font-size: 2rem;
`,M=m.d.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  /* margin: 15rem 1rem !important; */
  height: 15rem;
  font-size: 2.4rem;
  @media screen and (max-width: ${e=>e.theme.bpSmallest}) {
    font-size: 2rem;
  }
  @media screen and (max-width: 390px) {
    font-size: 1.5rem;
  }
`,V=(m.d.h1`
  color: ${e=>{let{$color:t}=e;return t}};
  font-size: ${e=>{let{$size:t}=e;return t}};
  text-align: center;
`,m.d.a`
  color: #fff;
  font-size: 2.4rem;
  &:hover {
    color: #fff;
  }
`);var A=a(11);a(122);var N=()=>{const[e,t]=Object(r.useState)(!1),a=()=>{t(!e)};return i.a.createElement(C,null,i.a.createElement(z,null,i.a.createElement(L,{autoPlay:!0,loop:!0,muted:!0,src:E,type:"video/mp4"})),i.a.createElement(I,null,i.a.createElement(M,null,i.a.createElement("h1",{className:"hero-title"},i.a.createElement("span",null,"Covid","   ","Tracker"),i.a.createElement($.a,{className:"trending-arrow"})),i.a.createElement("p",{className:"hero-lead"},i.a.createElement("span",{className:"hero-lead-madeby"},i.a.createElement("span",null,"A project by Amandeep"),i.a.createElement(V,{style:{display:"flex"},href:"https://www.linkedin.com/in/singhamandeep007/","aria-label":"Linkedin",target:"_blank",rel:"author"},i.a.createElement(A.d,null))))),i.a.createElement(S,null,i.a.createElement(O,{component:i.a.createElement(c.b,{to:"/dashboard",onMouseEnter:a,onMouseLeave:a}),$primary:!0,$big:!0,$shadow:"#fff",$rainbow:!0},"Dashboard ",e?i.a.createElement(T,null):i.a.createElement(D,null)))))};var X=e=>{let{className:t,data:{text:a,image:r,alt:n}}=e;return i.a.createElement("div",{className:`${t}`},i.a.createElement("div",{className:"imgContainer"},i.a.createElement("img",{src:r,alt:n})),i.a.createElement("div",{className:"textContainer"},i.a.createElement("p",null,a)))};const R=m.d.div`
  color: var(--color-secondary--light);
  background: var(--color-secondary);
  padding: 8rem 3rem;
  min-height: calc(100vh - 80px);

  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%); //prefix
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    padding: 10rem 1rem;
  }
`,W=m.d.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 110rem;
  margin-right: auto;
  margin-left: auto;

  justify-content: space-between;
`,F=m.e`
  0% {
    opacity: 100%;
    content: 'is a contagious disease.';
  }
  
  6.66% {
    opacity: 0%;
  }
  
  13.33%{
    opacity: 0%;
  }
  
  20% {
    opacity: 100%;
    content: 'can be asymptomatic.';
  }
  
  26.66% {
    opacity: 0%;
  }
  
  33.33% {
    opacity: 0%;
  }
  
  40% {
    opacity: 100%;
    content: 'causes respiratory illness.';
  }
  
  46.66% {
    opacity: 0%;
  }
  
  53.33% {
    opacity: 0%;
  }
  
  60% {
    opacity: 100%;
    content: 'have different variants.';
  }
  
  66.66% {
    opacity: 0%;
  }
  
  73.33% {
    opacity: 0%;
  }
  
  80% {
    opacity: 100%;
    content: 'has caused a pandemic.';
  }
  
  86.66% {
    opacity: 0%;
  }
  
  93.33% {
    opacity: 0%;
  }
  
  100% {
    opacity: 100%;
    content: 'originated from China.';
  }`,q=m.d.div`
  color: var(--color-primary);
  text-align: center;
  justify-self: center;
  align-self: center;
  margin-bottom: 1rem;

  min-width: 60%;

  h1 {
    color: var(--color-secondary-light);
    background: var(--color-primary);
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 700;
    padding: 1.5rem;
    text-align: left;

    &::after {
      content: "";
      animation-name: ${F};
      animation-duration: 18s;
      animation-iteration-count: infinite;
      -webkit-animation-name: ${F};
      -webkit-animation-duration: 18s;
      -webkit-animation-iteration-count: infinite;
    }
  }
  p {
    border-bottom: 1px solid var(--color-primary);
    font-weight: 600;
    display: block;
  }
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    h1 {
      font-size: 2.5rem;
      line-height: 2rem;
    }

    width: 100%;
  }
`,G=m.d.div`
  display: grid;

  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 5rem);
  // NOTE: define perspective on parent
  perspective: 1000px;
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    grid-template-rows: repeat(8, 8rem);
  }
`,B=m.c`
  grid-area: ${e=>{let{$order:t}=e;switch(t){case 1:return"3/1/7/4";case 2:return"2/2/8/5";case 3:return"1/3/-1/9";case 4:return"2/7/8/10";case 5:return"3/8/7/-1";default:return}}};
  z-index: ${e=>{let{$order:t}=e;return 2===t||4===t?2:3===t?3:1}};
  animation: ${e=>{let{$order:t,$selectedCardNum:a}=e;return r=t,i=a,m.e`
	from {
		transform: ${1===r?"translateX(50%) scale(1.2)":2===r?"translateX(25%) scale(1.1)":3===r&&i<3?"translateX(-50%) scale(0.6)":3===r&&i>3?"translateX(50%) scale(0.6)":4===r?"translateX(-25%) scale(1.1)":5===r?"translateX(-50%) scale(1.2)":"scale(0.2)"};
		z-index:${1===r?4:3===r&&"initial"===i?5:3===r?1:5===r?4:2};
	}
	50%{
		transform: ${1===r?"translateX(-75%) scale(1)":2===r?"translateX(-25%) scale(0.9)":3===r&&i<3?"translateX(50%) scale(0.8)":3===r&&i>3?"translateX(-50%) scale(0.8)":4===r?"translateX(25%) scale(0.9)":5===r?"translateX(75%) scale(1)":"scale(0.6)"};
		z-index:${1===r?1:3===r&&"initial"===i?4:3===r?3:5===r?1:2};
	}
	to {
		transform: ${1===r?"translateX(0%) scale(0.8)":2===r?"translateX(0%) scale(0.9)":3===r&&i<3||3===r&&i>3?"translateX(0%) scale(1.1)":4===r?"translateX(0%) scale(0.9)":5===r?"translateX(0%) scale(0.8)":"scale(0.8)"};
	}`;var r,i}}
    ${e=>{let{$animationTime:t}=e;return t}}s;

  animation-timing-function: cubic-bezier(
    1,
    0.01,
    0.72,
    0.78
  ); /* important to use a symmetrical timing function (linear also works) */
  animation-fill-mode: forwards;
`,H=m.c`
  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
  }
  @supports not (backdrop-filter: blur(10px)) {
    background: rgba(255, 255, 255, 0.9);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(20px);
      z-index: -1;
    }
  }
`,J=m.d.div`
  // NOTE: mozilla fallback
  ${H}
  cursor: pointer;
  ${B}
`,P=Object(m.d)(X)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 1rem;
  box-shadow: var(--color-primary-light) 0px 25px 0px -20px;

  background-color: #ffffff61;
  border: 1px solid var(--color-primary);

  transition: background-color 0.2s ease-in;

  color: var(--color-primary);

  ${e=>{let{$order:t}=e;return 3===t&&m.c`
      &:hover {
        background-color: var(--color-secondary);
        .textContainer {
          height: 50%;
          background-color: var(--color-primary-light);
          color: var(--color-secondary-light);
          p {
            padding: 0.5rem;
            font-size: 1.8rem;
            line-height: 2rem;
          }
        }
      }
    `}}

  .imgContainer {
    flex-grow: 2;
    // for firefox
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      padding: 1rem;
    }

    // NOTE: making the image occupy the grid area and prevent overflow
    object-fit: fill;
    overflow: hidden;
  }
  .textContainer {
    justify-self: end;
    align-self: stretch;
    color: var(--color-primary);

    border: 1px solid var(--color-primary);
    padding: 1rem;

    p {
      font-size: 1rem;
      overflow: hidden;
    }
    @media screen and (max-width: ${e=>e.theme.bpMedium}) {
      padding: 0.5rem;
      font-size: 0.7rem;
      line-height: 0.8em;
    }
  }
`;var Y={firstCard:{text:"Several vaccines have been developed safely and quickly to help protect you from COVID-19. They are proven to be effective in reducing your probability of contracting COVID-19. Once you are vaccinated, your body is much better prepared to shield off more viruses by making your immune system stronger.",image:a.p+"static/media/COVID-Icons-1.7d1bc84f.svg",alt:"vaccine"},secondCard:{text:"Wearing a mask reduces your chance of catching or spreading the coronavirus, it doesn\u2019t eliminate it entirely. If you are infected with the coronavirus and do not know it, a mask is very good at keeping your respiratory droplets and particles from infecting others. It helps in limiting the spread of COVID-19.",image:a.p+"static/media/COVID-Icons-2.3466363a.svg",alt:"mask"},thirdCard:{text:"If you have symptoms of COVID-19 ,stay home and self-isolate for 10 days from symptom onset, plus three days after symptoms cease. Call your health care provider or hotline for advice. Have someone bring you supplies. If you need to leave your house or have someone near you, wear a properly fitted mask to avoid infecting others.",image:a.p+"static/media/COVID-Icons-3.a9cf1a91.svg",alt:"stay home"},fourthCard:{text:"Physical distancing helps limit the spread of COVID-19. It means we keep a distance of at least 1.5m from each other and avoid spending time in crowded places or in groups. As we do not always know who may be sick with coronavirus. We can stay socially connected while physically distant \u2013 through video, call or text.",image:a.p+"static/media/COVID-Icons-4.ba5bcc59.svg",alt:"distance"},fifthCard:{text:"Wash your hands with soap and running water when hands are visibly dirty for 20-30 seconds. You can also clean them by using alcohol-based santizer. If you think a surface may be infected, clean it with simple disinfectant to kill the virus and protect yourself and others. Avoid touching your eyes, mouth, or nose.",alt:"Handwash",image:a.p+"static/media/COVID-Icons-5.8296b6a9.svg"}},_=a(25);var K=()=>{const[e,t]=Object(r.useState)({firstCard:{id:Object(g.a)(),order:1},secondCard:{id:Object(g.a)(),order:2},thirdCard:{id:Object(g.a)(),order:3},fourthCard:{id:Object(g.a)(),order:4},fifthCard:{id:Object(g.a)(),order:5}}),[a,n]=Object(r.useState)("initial");return i.a.createElement(_.a,{delay:250,id:"overview"},i.a.createElement(R,null,i.a.createElement(W,null,i.a.createElement(q,null,i.a.createElement("h1",null,"Covid "),i.a.createElement("p",null,"Advice for the public: Coronavirus disease (COVID-19)")),i.a.createElement(G,null,Object.entries(e).map((r=>i.a.createElement(J,{$order:r[1].order,key:r[1].id,onClick:()=>{var a;a=r[1].order,console.log("awd",a),3!==a&&(t(((e,t)=>{let a={};for(let r in e)e[r].order!==t?3!==e[r].order?a[r]={...e[r]}:a[r]={...e[r],order:t}:a[r]={...e[r],order:3};return a})(e,a)),n(a))},$animationTime:.7,$selectedCardNum:a},i.a.createElement(P,{$order:r[1].order,data:{...Y[r[0]]}}))))))))};const Q=m.d.div`
  color: #fff;
  background: ${e=>{let{lightBg:t}=e;return t?"var(--color-secondary)":"var(--color-dark-)"}};
  padding: 8rem 3rem;
  min-height: calc(100vh - 80px);

  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%); //prefix
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 90%);
`,U=m.d.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 110rem;
  margin-right: auto;
  margin-left: auto;

  justify-content: center;
`,Z=m.d.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-items: center;
  /* if image should be at start or not */
  grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col2 col1'":"'col1 col2'"}};

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col1' 'col2'":"'col1 col1' 'col2 col2'"}};
  }
`,ee=m.e`
	0% {
      opacity:0;
		transform: scale(0.1);
	}
	100% {
      opacity:1;
		transform: scale(1);
	}
}
`,te=m.d.div`
  padding: 1.5rem;
  grid-area: col1;
`,ae=m.d.div`
  padding: 1.5rem;
  grid-area: col2;

  animation: ${ee} 1s cubic-bezier(0, 1, 0.3, 1);
  animation-delay: 0.5s;
  will-change: scale, opacity;
`,re=m.d.div`
  width: 100%;
  padding: 2rem;
`,ie=m.d.p`
  color: var(--color-primary-light);
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`,ne=m.d.h1`
  margin-bottom: 2.4rem;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${e=>{let{lightText:t}=e;return t?"#fff":"#000"}};
  overflow-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    font-size: 2.8rem;
  }
`,oe=m.d.p`
  max-width: 90%;
  margin-bottom: 3.5rem;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: ${e=>{let{darkText:t}=e;return t?"#000":"#fff"}};
`,le=m.d.div`
  display: flex;
  justify-content: flex-start;
`,ce=m.d.div`
  max-width: 100%;
  height: 100%;
`,se=m.d.img`
  max-width: 50rem;
  max-height: 50rem;
  width: 100%;
`;var de=e=>{let{lightBg:t,id:a,imgStart:r,headline:n,description:o,buttonLabel:l,btnLink:c,img:s,alt:d,topLine:m,lightText:h,darkText:p,primary:u}=e;return i.a.createElement(_.a,{id:a},i.a.createElement(Q,{lightBg:t},i.a.createElement(U,null,i.a.createElement(Z,{imgStart:r},i.a.createElement(te,null,i.a.createElement(re,null,i.a.createElement(ie,null,m),i.a.createElement(ne,{lightText:h},i.a.createElement("span",null,n)),i.a.createElement(oe,{darkText:p},o),i.a.createElement(le,null,i.a.createElement(O,{component:i.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},l),$primary:u,$shadow:t?"#000":"#fff"})))),i.a.createElement(ae,null,i.a.createElement(ce,null,i.a.createElement(se,{src:s,alt:d})))))))},me=a(18);const he=m.d.nav`
  background: ${e=>{let{scrollNav:t}=e;return t?"rgba(0,0,0,0.75)":"transparent"}};
  height: 80px;
  /* NOTE: main part, should be same in offset in react scroll , as nav bar is shifted down by 80px*/
  margin-top: -80px;
  font-size: 1.5rem;
  /* to stay sticked on scroll to top */
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.2s all ease;
`,pe=m.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 3rem;
  /* keeps content centered */
  max-width: 110rem;
  margin-left: auto;
  margin-right: auto;
`,ue=m.d.div`
  /* at width > 768px display should be none */
  display: none;
  /* at width <=  768px display should be block */
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    display: block;
    font-size: 2.2rem;
    cursor: pointer;
    color: var(--color-secondary);
  }
`,fe=m.d.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    /* at mobile view ,display should be none */
    display: none;
  }
`,ge=m.d.li`
  height: 80px;
`,ve=Object(m.d)(me.Link)`
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  // HACK: react scroll adds class active when the target matches the id (when we pass spy as true), using it we can apply the style we want to on the nav link
  &.active {
    border-bottom: 3px solid var(--color-primary);
  }
  &:hover {
    color: var(--color-primary-light);
  }
`,be=m.d.div`
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    /* at mobile view display should be none */
    display: none;
  }
`,ye=m.d.div`
  position: relative;
  color: var(--color-secondary);
  justify-self: center;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  z-index: 3;
  &:hover {
    color: var(--color-secondary);
  }
`,we=Object(m.d)($.a)`
  font-size: 6rem;
  /* position: absolute;
   left: 2.7rem;
   top: 0.7rem; */
  position: absolute;
  z-index: -1;
  transform: translate(40%, -10%);
  opacity: 0.7;
  color: var(--color-primary);
`;var xe=()=>i.a.createElement(ye,{onClick:()=>{me.animateScroll.scrollToTop()}},i.a.createElement(we,null),"Covid Tracker");var Ee=e=>{let{toggle:t}=e;const[a,n]=Object(r.useState)(!1),o=()=>{window.scrollY>=80?n(!0):n(!1)};return Object(r.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o))),[]),i.a.createElement(he,{scrollNav:a},i.a.createElement(pe,null,i.a.createElement(xe,null),i.a.createElement(ue,{onClick:t},i.a.createElement(A.a,null)),i.a.createElement(fe,null,v.map((e=>{let{id:t,to:a,title:r}=e;return i.a.createElement(ge,{key:t},i.a.createElement(ve,{to:a,smooth:!0,duration:500,spy:!0,offset:-80},r))}))),i.a.createElement(be,null,i.a.createElement(O,{component:i.a.createElement(me.Link,{to:"footer",smooth:"true",duration:500}),$primary:!0,$shadow:"#fff"},"Important Links"))))};const ke=m.d.aside`
  position: fixed;
  z-index: 990;
  /* take all space available */
  width: 100%;
  height: 100%;
  background: var(--color-dark);
  display: ${e=>{let{isOpen:t}=e;return t?"grid":"none"}};
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  /* if isOpen is true show else hide (using opacity and top) */
  opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
  top: ${e=>{let{isOpen:t}=e;return t?"0":"-100%"}};
`,Oe=Object(m.d)(A.f)`
  color: var(--color-secondary);
`,$e=m.d.div`
  position: absolute;
  top: 3rem;
  right: 2.5rem;
  background: transparent;
  font-size: 2.2rem;
  cursor: pointer;
  outline: none;
`,je=m.d.div`
  color: var(--color-secondary);
`,Ce=m.d.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(8rem, 1fr);
  text-align: center;
  padding: 0;
  margin: 0;
  justify-items: center;
  @media screen and (max-width: ${e=>e.theme.bpSmall}) {
    grid-auto-rows: minmax(6rem, 1fr);
  }
`,ze=Object(m.d)(me.Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  color: var(--color-secondary);
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
    transition: 0.2s ease-in-out;
  }
  &.active {
    color: var(--color-primary);
  }
`,Le=m.d.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;var Ie=e=>{let{isOpen:t,toggle:a}=e;return i.a.createElement(ke,{isOpen:t,onClick:a},i.a.createElement($e,{onClick:a},i.a.createElement(Oe,null)),i.a.createElement(je,null,i.a.createElement(Ce,null,v.map((e=>{let{id:t,to:r,title:n}=e;return i.a.createElement(ze,{to:r,onClick:a,key:t,spy:!0,smooth:"true",duration:500},n)}))),i.a.createElement(Le,null,i.a.createElement(O,{component:i.a.createElement(me.Link,{onClick:a,to:"footer",smooth:"true",duration:500}),$primary:!0,$big:!0,$shadow:"#fff"},"Important Links"))))};const Se=m.d.div`
  color: #fff;
  background: #000;
  padding: 8rem 3rem;
  min-height: calc(100vh - 80px);
`,Te=m.d.div`
  display: flex;
  /* flex-wrap: wrap; */
  max-width: 110rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  //
  -webkit-perspective: 280rem;
  -moz-perspective: 280rem;
  perspective: 280rem;
  /* margin: 20px;
   margin-top: 50px; */
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    flex-direction: column;
  }
`,De=m.d.div`
  /* flex-grow: 1; */
  max-width: 50%;
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    max-width: 100%;
  }
  cursor: pointer;
  position: relative;
  /* max-width: 100%; */
  padding: 1rem;
  border-radius: 1px;
  /* z-index: 2; */
  background: var(--color-secondary);
  color: white;
  box-shadow: -20px 20px 0px 0 var(--color-primary);

  transform: rotateY(45deg);

  h2 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 600;

    color: var(--color-primary);
  }
`,Me=m.d.div`
  padding: 1.5rem;
  max-width: 100%;
  height: 100%;
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    margin-top: 3rem;
  }
`,Ve=m.d.img`
  margin: 1rem;
  max-width: 30rem;
  max-height: 30rem;
  width: 100%;
`,Ae=m.d.div`
  width: 100%;
  margin: 1.5rem auto;
  padding: 1rem 1.3rem;
  background-color: var(--color-primary-light);
  border-radius: 1px;
`,Ne=m.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 600;
    font-size: 1.9rem;
    text-align: left;
    cursor: pointer;
    margin: 0;
    color: var(--color-secondary-light);
  }

  .icons {
    color: var(--color-secondary-light);
    cursor: pointer;
  }
`,Xe=m.d.div`
  p {
    font-size: 1.5rem;
    text-align: left;
    padding: 0rem;
    margin-top: 0.3rem;
    transition: ease 0.4s;
    color: var(--color-secondary-light);
  }
`;var Re=a(69);var We=[{id:Object(g.a)(),title:"Should I get a COVID-19 vaccine?",info:"Yes. Three COVID-19 vaccines have been authorized for emergency use among specific age groups by the U.S. Food and Drug Administration (FDA), and now the Pfizer vaccine has received full FDA approval. Johns Hopkins Medicine views all authorized and approved COVID-19 vaccines as highly effective at preventing serious disease, hospitalization and death from COVID-19."},{id:Object(g.a)(),title:"What\u2019s the difference between the new coronavirus and other coronaviruses?",info:"There are many different kinds of coronavirus. Some only affect animals. Some have been circulating among human beings for years, causing respiratory illness and colds. Others have caused small, severe human disease outbreaks in the past, such as the coronaviruses that caused severe acute respiratory syndrome (SARS) in 2003 and Middle East respiratory syndrome (MERS) in 2012. The new coronavirus is different from these, and was first identified in December 2019."},{id:Object(g.a)(),title:"Do COVID-19 cases decline when it gets warm outside?",info:"While some viral illnesses, like the flu, seem to be less common in warmer months, it is still possible to catch them during that time. Researchers are exploring the effects of temperature, ventilation and weather on the spread of the coronavirus. Regardless of the season, people gathering indoors can spread the coronavirus."},{id:Object(g.a)(),title:"Is the coronavirus airborne?",info:"Yes, the coronavirus can be transmitted through the air by tiny respiratory particles that contain the virus. These infectious particles are dispersed into the air when a person carrying the coronavirus breathes, talks, sings, coughs or sneezes. The CDC has updated its information on airborne spread of the coronavirus."},{id:Object(g.a)(),title:"Can you catch the coronavirus from surfaces?",info:"Although the coronavirus weakens and dies over time outside the human body, studies suggest it can live on surfaces for a few hours or up to several days, depending on the surface, temperature and other environmental factors. For instance, a small amount of the coronavirus is detectable on plastic surfaces for up to three days, on stainless steel for up to two days and up to one day on cardboard, but it\u2019s at less than 0.1% of the starting virus material."}],Fe=a.p+"static/media/svg-4.03b85c77.svg";const qe=e=>{let{...t}=e;const[a,n]=Object(r.useState)(!1);return i.a.createElement(Ae,{onClick:()=>n(!a)},i.a.createElement(Ne,null,i.a.createElement("h3",null,t.question.title),a?i.a.createElement(Re.a,{className:"icons"}):i.a.createElement(Re.b,{className:"icons"})),i.a.createElement(Xe,null,a&&i.a.createElement("p",null,t.question.info)))};var Ge=()=>i.a.createElement(_.a,{id:"faq"},i.a.createElement(Se,null,i.a.createElement(Te,null,i.a.createElement(De,null,i.a.createElement("h2",null,"F.A.Q to clear your doubts"),We.map((e=>i.a.createElement(qe,{key:e.id,question:e})))),i.a.createElement(Me,null,i.a.createElement(Ve,{src:Fe,alt:"faq"}))))),Be=a(100);const He=m.d.div`
  background-color: var(--color-dark-light);
  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%); //prefix
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
`,Je=m.d.div`
  padding: 3.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  margin: 0 auto;
`,Pe=m.d.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    padding-top: 3.2rem;
  }
`,Ye=m.d.div`
  display: flex;
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    flex-direction: column;
  }
`,_e=m.d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5rem;
  text-align: left;
  width: 16rem;
  box-sizing: border-box;
  color: var(--color-secondary);

  @media screen and (max-width: ${e=>e.theme.bpSmall}) {
    margin: 0;
    padding: 1rem;
    width: 100%;
  }
`,Ke=m.d.h1`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`,Qe=Object(m.d)(Ke)`
  background: linear-gradient(transparent 60%, var(--color-primary) 80%);
  display: inline;
`,Ue=m.d.a`
  color: var(--color-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;

  &:hover {
    color: var(--color-primary);
    transition: 0.3s ease-out;
  }
`,Ze=m.d.section`
  max-width: 100rem;
  width: 100%;
`,et=m.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110rem;
  margin: 4rem auto 0 auto;

  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    flex-direction: column;
  }
`,tt=(m.d.small`
  color: var(--color-secondary);
  margin-bottom: 1.6rem;
`,m.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
  @media screen and (max-width: ${e=>e.theme.bpMedium}) {
    padding-top: 3rem;
  }
`),at=m.d.a`
  color: var(--color-secondary);
  font-size: 2.4rem;
`;var rt=[{id:Object(g.a)(),FooterTitle:"India Govt.",links:[{id:Object(g.a)(),href:"https://www.mygov.in/covid-19",ariaLabel:"MyGov",text:"MyGov Covid19"},{id:Object(g.a)(),href:"https://www.mohfw.gov.in/",ariaLabel:"mohfw",text:"MoHFW"},{id:Object(g.a)(),href:"https://delhi.gov.in/",ariaLabel:"DelhiGovt.",text:"Delhi Govt."},{id:Object(g.a)(),href:"https://www.icmr.gov.in/",ariaLabel:"icmr",text:"ICMR"},{id:Object(g.a)(),href:"https://covid19.india.gov.in/",ariaLabel:"helpline",text:"Helpline"}]},{id:Object(g.a)(),FooterTitle:"WHO",links:[{id:Object(g.a)(),href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters",ariaLabel:"Mythbusters",text:"Mythbusters"},{id:Object(g.a)(),href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance",ariaLabel:"Technical Guidance.",text:"Technical Guidance"},{id:Object(g.a)(),href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",ariaLabel:"Advice for the public",text:"Advice for the public"},{id:Object(g.a)(),href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov",ariaLabel:"Research",text:"Research"},{id:Object(g.a)(),href:"https://www.who.int/en/activities/tracking-SARS-CoV-2-variants/",ariaLabel:"SARS-CoV-2 variants",text:"SARS-CoV-2 variants"}]},{id:Object(g.a)(),FooterTitle:"CDC",links:[{id:Object(g.a)(),href:"https://www.cdc.gov/coronavirus/2019-ncov/",ariaLabel:"ncov",text:"What's Covid"},{id:Object(g.a)(),href:"https://www.cdc.gov/coronavirus/2019-nCoV/hcp/index.html",ariaLabel:"Healthcare Workers",text:"Healthcare Workers"},{id:Object(g.a)(),href:"https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html",ariaLabel:"vaccine.",text:"Vaccine"},{id:Object(g.a)(),href:"https://www.cdc.gov/coronavirus/2019-ncov/science/science-agenda-covid19.html",ariaLabel:"Science Agenda",text:"Science Agenda"},{id:Object(g.a)(),href:"https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html",ariaLabel:"Travel",text:"Travel"}]}];const it=[{id:Object(g.a)(),href:"https://www.google.com/search?q=COVID",ariaLabel:"Google",icon:i.a.createElement(Be.a,null)},{id:Object(g.a)(),href:"https://www.facebook.com/coronavirus_info/",ariaLabel:"Facebook",icon:i.a.createElement(A.b,{color:"#3b5998"})},{id:Object(g.a)(),href:"https://www.youtube.com/watch?v=oqFn6AHoJZQ",ariaLabel:"Youtube",icon:i.a.createElement(A.h,{color:"#ff0000"})},{id:Object(g.a)(),href:"https://twitter.com/search?q=%23covid19",ariaLabel:"Twitter",icon:i.a.createElement(A.g,{color:"#55acee"})},{id:Object(g.a)(),href:"https://www.linkedin.com/business/talent/blog/covid-19",ariaLabel:"LinkedIn",icon:i.a.createElement(A.d,{color:"#007bb5"})},{id:Object(g.a)(),href:"https://www.instagram.com/who/?hl=en",ariaLabel:"Instagram",icon:i.a.createElement(A.c,{color:"#e95950"})}];var nt=()=>i.a.createElement(_.a,{id:"footer"},i.a.createElement(He,null,i.a.createElement(Je,null,i.a.createElement(Pe,null,rt.map((e=>{let{id:t,FooterTitle:a,links:r}=e;return i.a.createElement(Ye,{key:t},i.a.createElement(_e,null,i.a.createElement(Qe,null,a),r.map((e=>{let{id:t,href:a,ariaLabel:r,text:n}=e;return i.a.createElement(Ue,{key:t,href:a,target:"_blank","aria-label":r,rel:"external"},n)}))))}))),i.a.createElement(Ze,null,i.a.createElement(et,null,i.a.createElement(xe,null),i.a.createElement("div",{role:"list"},i.a.createElement("span",{role:"listitem",style:{color:"#fff"}},"Developed by Amandeep")),i.a.createElement(tt,null,it.map((e=>{let{id:t,href:a,icon:r,ariaLabel:n}=e;return i.a.createElement(at,{key:t,href:a,target:"_blank","aria-label":n,rel:"external"},r)}))))))));var ot={bp4k:"112.5em",bpLargest:"75em",bpLarge:"62.5em",bpMedium:"50em",bpSmall:"37.5em",bpSmallest:"31.25em"};const lt=m.b`
 
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }
   
   :root {
      --color-primary: #eb2f64;
      --color-primary-light: #ff3366;
      --color-primary-dark: #ba265d;

      --color-secondary: #faf9f9;
      --color-secondary-light: #fff;

      --color-dark: #000000;
      --color-dark-light: #000313;

      // FONT VARIABLES
      --font-primary: 'Nunito', sans-serif;
      --font-display: 'Josefin Sans', sans-serif;
   }

  html,body{
      margin: 0;
      padding: 0;
  }
  html {
      box-sizing: border-box;
      @media only screen and (min-width: ${ot.bp4k}) {
         font-size: 87.5% !important; // 14px
      }
      // 1200px - 1800px font size : 10px
      @media only screen and (max-width: ${ot.bp4k}) {
         font-size: 68.5% !important; // 11px
      }
      // 800px - 1200px font size : 10px
      @media only screen and (max-width: ${ot.bpLargest}) {
         font-size: 62.5% !important; // 10px
      }

      @media only screen and (max-width: ${ot.bpMedium}) {
         font-size: 56.5% !important; // 9px
      }
      @media only screen and (max-width: ${ot.bpSmall}) {
         font-size: 50% !important; // 8px
      }
      @media only screen and (max-width: 390px) {
         font-size: 43.75% !important; // 8px
      }
   }
   body{
      font-family: var(--font-primary);
      font-weight: 400;
      line-height: 1.6;

   }

   // NOTE: we can change the style of selected text. using the selection pseudo class
   ::selection {
      background-color: var(--color-primary);
      color: var(--color-secondary);
   }
`,ct={...ot};var st=function(){const[e,t]=Object(r.useState)(!1),a=()=>{t(!e)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(lt,null),i.a.createElement(m.a,{theme:ct},i.a.createElement("main",{style:{background:"var(--color-dark)"}},i.a.createElement(Ie,{isOpen:e,toggle:a}),i.a.createElement(Ee,{toggle:a}),i.a.createElement(N,null),i.a.createElement(K,null),i.a.createElement(de,b),i.a.createElement(de,y),i.a.createElement(de,w),i.a.createElement(de,x),i.a.createElement(Ge,null),i.a.createElement(nt,null))))};const dt=i.a.lazy((()=>Promise.all([a.e(3),a.e(8)]).then(a.bind(null,368))));var mt=()=>i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/"},i.a.createElement(s,{title:"Home"}),i.a.createElement(st,null)),i.a.createElement(d.a,{exact:!0,path:"/dashboard"},i.a.createElement(s,{title:"Dashboard"}),i.a.createElement(dt,null))),ht=a(50);a(131);var pt=()=>i.a.createElement(l.b,null,i.a.createElement(l.a,null,i.a.createElement("script",{type:"application/json"},JSON.stringify({"@context":"http://schema.org/","@type":"NewsMediaOrganization",name:"Covid-19 Information, Useful Links and Live Dashboard",alternateName:"COVID-19 Tracker",url:"https://covidindia2020.web.app/",description:"Provides covid related information and real-time live tracking of Coronavirus cases in India.",identifier:"https://covidindia2020.web.app/"}))),i.a.createElement(c.a,{basename:"https://singhamandeep007.github.io/covid-tracker-india/"},i.a.createElement(r.Suspense,{fallback:i.a.createElement(ht.a,null)},i.a.createElement(mt,null))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},25:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(1),i=a.n(r),n=a(99),o=a(50);function l(e){var t,a,r,l,c;const{tag:s="div",id:d,children:m,style:h,className:p}=e,u=s,f={root:null!==(t=e.root)&&void 0!==t?t:null,threshold:null!==(a=e.threshold)&&void 0!==a?a:0,rootMargin:null!==(r=e.rootMargin)&&void 0!==r?r:"10%",triggerOnce:null===(l=e.triggerOnce)||void 0===l||l,initialInView:null!==(c=e.initialInView)&&void 0!==c&&c},{ref:g,inView:v}=Object(n.a)({...f});return i.a.createElement(u,{id:d,ref:g,style:h,className:p,children:v?m:i.a.createElement(o.a,null)})}},50:function(e,t,a){"use strict";var r=a(1),i=a.n(r),n=a(101);t.a=e=>{let{num:t=1,type:a="square"}=e,r=Array.from(Array(t),((e,t)=>i.a.createElement("div",{key:t},i.a.createElement(n.a.Image,{square:"square"===a,rectangular:"rectangular"===a}))));return i.a.createElement(n.a,{fluid:!0},r)}}},[[132,1,4]]]);
//# sourceMappingURL=main.e2c90002.chunk.js.map